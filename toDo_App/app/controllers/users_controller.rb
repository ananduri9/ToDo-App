class UsersController < ApplicationController
	protect_from_forgery


	def show
		@user = User.find(params[:id])
		@to_dos = @user.to_dos
	end

	def new
		redirect_to "/home"
	end

	def create
		@user = User.new(user_params)
		if @user.save
			flash[:notice] = "Welcome to the Sample App!"
      		redirect_to @user
		else
			render 'static_pages/home'
		end
	end


	private
		def user_params
			params.require(:user).permit(:uname, :email, :password, :password_confirmation)
		end
end