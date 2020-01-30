require_relative "cat.rb"
require "pry"

class Owner
  attr_reader :name, :species

  @@all = []

  def initialize(owners_name="Unknown")
    @name = owners_name
    @species = "human"
    @@all << self
  end

  def say_species
    # "I am #{self.species}."
    "I am a #{@species}."
  end

  # class method is called on a class, not instances
  def self.all
    @@all
  end

  def self.count
    # @@all.length
    self.all.count
  end

  def self.reset_all
    self.all.clear
    # @@all = []
  end

  def cats
    Cat.all.select do |kitty|
      kitty.owner == self
    end
  end

  def dogs
    Dog.all.select do |dog|
      dog.owner == self
    end
  end

  def buy_cat(name)
    Cat.new(name, self)
  end

  def buy_dog(name)
    Dog.new(name, self)
  end

  def walk_dogs
    self.dogs.each do |dog|
      dog.mood = "happy"
    end
  end

  def feed_cats
    self.cats.each do |kitty|
      kitty.mood = "happy"
    end
  end

  def sell_pets
    pets = self.cats + self.dogs

    pets.each do |pet|
      pet.mood = "nervous"
      pet.owner = nil
    end
  end

  def list_pets
    "I have #{self.dogs.count} dog(s), and #{self.cats.count} cat(s)."
  end

end

# jenny = Owner.new("Jenny")
# joseph = Owner.new

# p jenny
# p joseph

# jenny = Owner.new("Jenny", "alien")

# p jenny

# puts jenny.say_species

# juju = Cat.new("Juju", jenny)

# p juju
