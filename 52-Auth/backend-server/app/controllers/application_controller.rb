class ApplicationController < ActionController::API

  def secret_key
    "h3ll0"
  end

  #payload is just a hash {user_id: 12} used to identify a person
  #given a payload, it will generate a token
  def encode(payload)
    JWT.encode(payload, secret_key, "HS256")
  end

  #given a token, it will generate the payload
  def decode(token)
    JWT.decode(token, secret_key, true, {algorithm: "HS256"})[0]
  end

end
