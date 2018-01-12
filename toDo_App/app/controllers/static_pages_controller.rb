class StaticPagesController < ApplicationController
  def home
  	@user = User.new
  end

  def list
  end

  def about
  end
end
