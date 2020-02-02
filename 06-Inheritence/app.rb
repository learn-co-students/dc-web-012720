require "pry"

class Animal
  attr_reader :name, :species
  def initialize(name, species)
    @name = name 
    @species = species
  end 

  def speak 
    puts "My name is #{self.name}. I am a #{self.species}"
  end 
end 

class Mammal < Animal
  def walk
    puts "trot trot trot..." 
  end 
end 

class Dog < Mammal 
  attr_reader :age
  def initialize(name, age)
    super(name, "dog")
    @age = age
  end 

  def fetch
    puts "run, run, run, got it!"
  end

  def walk
    puts "running so fast I'm dragging my owner"
    super
  end 

  def speak 
    super
    puts "bow wow wow. I am #{dog_age} years old. 
    My middle name is #{middle_name}"
  end

  private 
  def dog_age
    @age * 7
  end 

  def middle_name
    "Max"
  end 
end 

class Cat < Mammal
  def initialize(name)
    super(name, "cat")
  end
end 

class Fish < Animal 
  def initialize(name)
    super(name, "fish")
  end
end 
