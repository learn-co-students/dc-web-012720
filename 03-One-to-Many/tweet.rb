require 'pry'
class Tweet 
    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message = message 
        @user = user         #adds it to the user's tweets list
        @@all << self
    end 

    def self.all
        @@all
    end 

    def username 
        self.user.username
    end 
    
end