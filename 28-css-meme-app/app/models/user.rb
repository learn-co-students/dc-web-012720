class User < ApplicationRecord
    has_secure_password
    has_many :memes
    has_many :images, through: :memes
    validates :username, presence:true, uniqueness: true
    validates :password, presence:true
end
