class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirecto_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.repuire(:user).permit(:name, :email)
  end

end
