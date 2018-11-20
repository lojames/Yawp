class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
    puts @user.errors
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :email, :gender, :phone_number, :zip_code, :birthdate)
  end
end
