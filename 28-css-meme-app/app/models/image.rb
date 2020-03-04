class Image < ApplicationRecord
    has_many :memes
    has_many :users, through: :memes
end
