class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks, :reject_if => :name_blank
    validates :name, presence: true, uniqueness: {case_sensitive: true}
    validates :year_established, presence: true, numericality: true
    validate :year_established_must_be_valid, unless: Proc.new {|attributes| attributes.year_established.blank?}

    def name_plus_date
        return "#{self.name} founded in #{self.year_established}"
    end

    def name_blank(attributes)
        attributes['name'].blank?
    end

    def year_established_must_be_valid
        if !(self.year_established >= 1800 && self.year_established <= Date.today.year)
            errors.add(:year_established, "must be between 1800 and #{Date.today.year}")
        end
    end
end
