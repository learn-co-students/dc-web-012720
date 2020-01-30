require "pry"

class Pin
  attr_accessor :title, :description 
  @@all = []

  def initialize(title, description)
    @title = title 
    @description = description
    @@all << self
  end

  def self.all
    @@all
  end

  def users 
    pins_saves = Save.all.select{|save| save.pin == self}
    pins_saves.map{|save| save.user }
  end 

  def average_users_age
    age_total = 0
    self.users.each{|user|
      age_total += user.age
    }
    age_total / self.users.length
  end 
end 