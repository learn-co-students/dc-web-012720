class Drink < ActiveRecord::Base
  has_many(:favorites)
  has_many :users, through: :favorites

  def tweets
    arr = []
    self.users.each{|user|
      #arr += user.tweets

      arr = arr + user.tweets
    } #give me an array
    arr
  end
end
