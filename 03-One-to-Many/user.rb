class User
    attr_reader :bio # instance method #username 
    attr_accessor :username

    def initialize(username)
        @username = username
        @bio = "just another dad"
    end

    def post_tweet(message)
        #self is our coffee_dad or tea_uncle
        #takes a message, 
        
        #creates a new tweet, and 
        Tweet.new(message, self)
    end 

    def tweets
        Tweet.all.select do | tweet |
            tweet.user == self
        end 
    end 
end 