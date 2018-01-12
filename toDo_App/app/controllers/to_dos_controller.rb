class ToDosController < ApplicationController
	protect_from_forgery

	def create
		@user = User.find(params[:id])
		@to_do = @user.to_dos.build(to_do_params)
		if @to_do.save
			flash[:success] = "ToDo created!"
			redirect_to @user
		else
			flash.now[:danger] = "Failed to create To Do"
			render 'static_pages/home'
		end
	end

	def edit
	end

	def destroy
		@user = User.find(params[:uid])
		@micropost = @user.to_dos.find_by(id: params[:tid])
		@micropost.destroy
		redirect_to @user
	end

	private

		def to_do_params
			params.require(:to_do).permit(:message, :deadline)
		end


end
