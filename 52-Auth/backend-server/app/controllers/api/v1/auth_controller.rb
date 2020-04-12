class Api::V1::AuthController < ApplicationController

  #only authenticate the user if
  #this user name exists
  #the password matches that username

  def create # POST /api/v1/login
    user = User.find_by(username:params["username"])
    if user && user.authenticate(params["password"])
      payload = {user_id: user.id}
      token = encode(payload)
      render json: {
        message: "found user, logging in...",
        user_data: user,
        error: false,
        token: token
      }
    else
      render json: {
        message: "error, invalid username or password",
        error: true
      }
    end
  end

end
