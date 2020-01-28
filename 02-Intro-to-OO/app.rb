require 'pry'

class Player 
    attr_reader :age
    attr_writer :shoe
    attr_accessor :name

    @@str = "Player"
    @@all = []

    def initialize(name, age, shoe)
        @name = name
        @age = age 
        @shoe = shoe
        @@all << self
    end 

    def age=(new_age)
        if(new_age < 18)
            @age = 18
        else
            @age = new_age
        end 
    end 

    def greet
        puts "My name is #{self.name} and I have #{self.shoe} sized feet. My name is #{@name} and I have #{@shoe} sized feet"
    end 

    def shoe 
        if(@shoe > 10)
            return "big"
        else 
            return "small"
        end
    end 

    def get_class_name
        "hello"
    end 

    def self.get_class_name
        "HIIIII"
    end 

    def self.all
        @@all
    end  
end 



maya = Player.new("Maya Moore", 30, 9)
sue = Player.new("Sue Bird", 35, 11)
candance = Player.new("Candance", 29, 8)




# candance.shoe #instance methods are called off an instance 
# maya.greet


# Player.get_all_players



































# x = 3
# y = ["Ann", "Joseph", "Jenny"]
# puts y.[](1)
# puts y[1]
# puts y.[] 1
# # y.length, y.[](1)

# class Array 
#     def length
#         return #the number of elements 
#     end 

#     def [](num)
#         #return the element at index num 
#     end 
# end 