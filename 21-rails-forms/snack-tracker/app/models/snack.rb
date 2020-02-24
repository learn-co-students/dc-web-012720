class Snack < ApplicationRecord

    def high_calorie?
        return self.calories >= 500
    end 
end
