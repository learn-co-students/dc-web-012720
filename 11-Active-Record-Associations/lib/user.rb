class User < ActiveRecord::Base
  has_many :tweets
  has_many :favorites
  has_many :drinks, through: :favorites

  #ann.tweets
  # def tweets
  #   Tweet.all.select{|tweet|
  #     tweet.user_id == self.id
  #   }
  # end

  #User.find_longest_username
  def self.find_longest_username
    self.all.max_by{ |user| user.username.length }.username
  end
end
