require 'uri'

class Api::BusinessesController < ApplicationController

  def show
    @business = Business.find(params[:id])
    if @business
      @reviews = @business.reviews.includes(:user, :images)
      @images = @business.images.includes(:user)
      render :show
    else
      render json: @business.errors.full_messages, status: 404
    end
  end

  def index
    radius = params[:radius] ? params[:radius] : 5
    query = "%" + URI.unescape(params[:query]).downcase + "%"

    businesses = Business.in_bounds(params[:lat].to_f,params[:lon].to_f,radius).includes(:reviews, :images)
    @businesses = businesses.joins("RIGHT JOIN business_categories on businesses.id = business_categories.business_id")
      .joins("LEFT JOIN categories ON business_categories.category_id = categories.id")
      .where("lower(businesses.name) SIMILAR TO ?
        OR lower(categories.name) SIMILAR TO ?", query, query)
      .distinct("businesses.id")

    render :index
  end

  private

  def business_params
    params.require(:business).permit(:name, :neighborhood, :latitude, :longitude, :street_address, :city, :state, :zip, :phone, :website, :price)
  end
end
