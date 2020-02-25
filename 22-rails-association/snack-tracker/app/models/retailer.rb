class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks, :reject_if => :name_blank

    def name_plus_date
        return "#{self.name} founded in #{self.year_established}"
    end

    def name_blank(attributes)
        attributes['name'].blank?
    end
end
