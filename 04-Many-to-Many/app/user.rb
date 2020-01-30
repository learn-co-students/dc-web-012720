require "pry"

class User
  attr_accessor :username, :age
  @@all = []

  def initialize(username, age)
    @username = username 
    @age = age
    @@all << self
  end

  def save_pin(pin)
    Save.new(self, pin)
  end 

  def self.all
    @@all
  end 

  def pins 
    # users_saves = Save.all.select {|save| 
    #   save.user == self 
    # }
    # users_pins = users_saves.map{ |save| save.pin }
    # users_pins
    
    Save.all.select {|save| 
      save.user == self 
    }.map{ |save| 
      save.pin 
    }
  end 

  def number_of_saved_pins
    self.pins.count
  end 
end 