class Api::BusinessesController < ApplicationController

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews.includes(:user, :images)
    @images = @business.images.includes(:user)
    render :show
  end

  def index
    @businesses = Business.all.includes(:reviews, :images)
    render :index
  end

  private

  def business_params
    params.require(:business).permit(:name, :neighborhood, :latitude, :longitude, :street_address, :city, :state, :zip, :phone, :website, :price)
  end
end
