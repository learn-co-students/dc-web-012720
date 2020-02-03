
class Driver
    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all
    end

    def total_distance
      
    self.rides.map do |ride_obj|
            ride_obj.distance
        end.sum
    end
    
    # takes an argument of a distance (float) and returns all drivers who have exceeded that mileage
    def self.mileage_cap(distance)
        self.all.select do |driver_obj|
            driver_obj.total_distance > distance
        end
    end

    # returns all rides a driver has been on
    def rides 
        Ride.all.select do |ride_obj|
            ride_obj.driver == self
        end
    end

    def passengers 
        self.rides.map do |ride_obj|
            ride_obj.passenger
        end
    end

end