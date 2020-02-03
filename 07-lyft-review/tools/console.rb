require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


joseph = Passenger.new("Joseph")
jenny = Passenger.new("Jenny")
ann = Passenger.new("Ann")
carl = Passenger.new("Carl")

valentin = Driver.new("Valentin")
jason = Driver.new("jason")
sonata = Driver.new("sonata")
paul = Driver.new("paul")
alan = Driver.new("alan")

ride1 = Ride.new({distance: 100, driver: valentin, passenger: joseph })
ride2 = Ride.new({distance: 50, driver: jason, passenger: joseph})
ride3 = Ride.new(distance: 200, driver: paul, passenger: jenny)
ride3 = Ride.new(distance: 200, driver: paul, passenger: carl)
ride4 = Ride.new(distance: 10, driver: alan, passenger: ann)

puts "should find the average distance of all rides"
average = Ride.average_distance
puts average == 112.0
puts average != 30

binding.pry
0
