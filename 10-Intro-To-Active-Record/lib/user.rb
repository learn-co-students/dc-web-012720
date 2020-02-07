class User < ActiveRecord::Base
  def greet
    puts "I am #{self.username}!"
  end
end
