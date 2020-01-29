require_relative "./user.rb"
require_relative "./tweet.rb"
require "pry"

x = 3
puts x 

puts "Starting tests..."
puts "Testing that we can create a user"
coffee_dad = User.new("CoffeeDad")
tea_uncle = User.new("TeaUncle")
p coffee_dad.class == User

puts "Testing User#username" 
p coffee_dad.username == "CoffeeDad"
p tea_uncle.username == "TeaUncle"

puts "Testing that we can create a tweet"
tweet1 = Tweet.new("i love coffee", coffee_dad)
tweet2 = Tweet.new("i HATE coffee!!!!", tea_uncle)
tweet3 = Tweet.new("making coffee", coffee_dad)
p tweet1.class == Tweet

puts "Testing Tweet#message"
p tweet1.message == "i love coffee"

puts "Testing Tweet#user"
p tweet1.user == coffee_dad

puts "Testing Tweet.all"
p Tweet.all.length == 2
p Tweet.all[0].class == Tweet

puts "Testing Tweet#username"
p tweet2.username == "TeaUncle"
p tweet1.username == "CoffeeDad"


p coffee_dad.tweets 
coffee_dad.post_tweet("tea is ok too...")
p Tweet.all 
p coffee_dad.tweets

binding.pry