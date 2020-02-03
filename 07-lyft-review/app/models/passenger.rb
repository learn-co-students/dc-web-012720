
class Passenger
    attr_reader :name

    @@all = []

    def initialize(name) 
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    # returns all drivers a passenger has ridden with
    def drivers
        self.rides.map do |ride_obj|
            ride_obj.driver
        end
    end

    # returns all rides a passenger has been on
    def rides
        Ride.all.select do |ride_obj| 
            ride_obj.passenger == self
        end
    end

    # should calculate the total distance the passenger has travelled with the service
    
    def total_distance
        self.rides.map do |ride_obj|
            ride_obj.distance
        end.sum
    end

    # should find all passengers who have travelled over 100 miles with the service
    def self.premium_members
        self.all.select do |pass_obj|
            pass_obj.total_distance > 100
        end
    end
end