
class Ride
    attr_reader :passenger, :driver, :distance

    @@all = []
    
    def initialize(passenger:, driver:, distance:)
        @passenger = passenger
        @driver = driver
        @distance = distance.to_f
        @@all << self
    end

    def self.all
        @@all
    end

    # should find the average distance of all rides
    def self.average_distance
        
        total_distance = self.all.map do |ride_obj|
            ride_obj.distance
        end.sum


        total_distance / self.all.count

    end




end