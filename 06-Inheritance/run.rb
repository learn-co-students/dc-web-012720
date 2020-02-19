require 'pry'
require_relative './app.rb'

ella = Cat.new("Ella")
goldie = Fish.new("Goldie")
fido = Dog.new("Fido", 10)
sparky = Dog.new("Sparky", 1)
daisy = Dog.new("Daisy", 2)
jack = Mammal.new("Jack", "kangaroo")

binding.pry
0
