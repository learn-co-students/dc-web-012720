class Snack < ApplicationRecord
    belongs_to :retailer
    
    def high_calorie?
        return self.calories >= 500
    end 
end
