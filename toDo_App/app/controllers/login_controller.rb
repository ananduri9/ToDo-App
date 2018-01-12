class LoginController < ApplicationController
  protect_from_forgery

  def new
  	@user = User.new
  	render 'static_pages/home'
  end

  def create
  	@user = User.find_by(email: params[:email])
  	if @user && @user.authenticate(params[:apassword])
  		flash[:success] = 'Welcome back'
  		redirect_to @user
  	else
  		@user = User.new
  		flash.now[:danger] = 'Invalid email/password combination'
  		render 'static_pages/home'
  	end
  end
end
