require 'net/http'

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    resp = Net::HTTP.get_response(URI.parse("https://secure.shippingapis.com/shippingapi.dll?API=CityStateLookup&XML=%3CCityStateLookupRequest%20USERID=%27#{Rails.application.credentials.usps[:api_key]}%27%3E%20%3CZipCode%20ID=%270%27%3E%20%3CZip5%3E#{@user.zip_code}%3C/Zip5%3E%20%3C/ZipCode%3E%20%3C/CityStateLookupRequest%3E")).body
    if resp.exclude?("Error")
      @user.city = resp.match(/(?<=<City>).*?(?=<)/)[0].titleize
      @user.state = resp.match(/(?<=<State>).*?(?=<)/)[0]
      if @user.save
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: [resp.match(/(?<=<Description>).*?(?=<)/)[0]], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :email, :gender, :phone_number, :zip_code, :birthdate)
  end
end
