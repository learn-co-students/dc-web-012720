class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  #when there is a jwt on load of the client app
  def profile
    token = request.headers["Authentication"]
    payload = decode(token)
    user = User.find(payload["user_id"])
    render json: user
  end
end
