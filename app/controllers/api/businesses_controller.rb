class Api::BusinessesController < ApplicationController

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews.includes(:user, :images)
    @images = @business.images.includes(:user)
    render :show
  end

  def index
    # radius = params[:radius] ? params[:radius] : 5
    # query = "%" + params[:q].downcase + "%"
    #
    # businesses = Business.in_bounds(params[:lat].to_f,params[:lon].to_f,radius).includes(:reviews, :images)
    # @businesses = businesses.joins("RIGHT JOIN business_categories on businesses.id = business_categories.business_id")
    #   .joins("LEFT JOIN categories ON business_categories.category_id = categories.id")
    #   .where("lower(businesses.name) SIMILAR TO ?
    #     OR lower(categories.name) SIMILAR TO ?", query, query)
    #   .distinct("businesses.id")

    businesses = Business.in_bounds(40.751282,-73.98399).includes(:reviews, :images)
    @businesses = businesses.joins("RIGHT JOIN business_categories on businesses.id = business_categories.business_id")
      .joins("LEFT JOIN categories ON business_categories.category_id = categories.id")
      .where("lower(businesses.name) SIMILAR TO ?
        OR lower(categories.name) SIMILAR TO ?", '%voc%', '%voc%')
      .distinct("businesses.id")
    render :index
  end

  private

  def business_params
    params.require(:business).permit(:name, :neighborhood, :latitude, :longitude, :street_address, :city, :state, :zip, :phone, :website, :price)
  end
end
