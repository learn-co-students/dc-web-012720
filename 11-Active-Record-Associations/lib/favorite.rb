class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :drink

  #a favorite has only one user and only one drink
end
