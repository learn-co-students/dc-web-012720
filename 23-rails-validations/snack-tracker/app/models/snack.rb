class Snack < ApplicationRecord
    belongs_to :retailer
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :calories, presence: true, numericality: true
    validates :deliciousness, presence: true
    
    def high_calorie?
        return self.calories >= 500
    end 
end

