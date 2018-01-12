class NotesController < ApplicationController
	protect_from_forgery

	def create
		@user = User.find(params[:id])
		@note = @user.notes.build(notes_params)
		if @note.save
			flash[:success] = "Note created!"
			redirect_to @user
		else
			flash.now[:danger] = "Failed to create Note"
			render 'static_pages/home'
		end
	end

	def new
		redirect_to '/home'
	end

	def destroy
		@user = User.find(params[:uid])
		@micropost = @user.notes.find_by(id: params[:tid])
		@micropost.destroy
		redirect_to @user
	end

	private

		def notes_params
			params.require(:note).permit(:message)
		end
end
