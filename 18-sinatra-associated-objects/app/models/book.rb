class Book < ActiveRecord::Base

    belongs_to :author

    def author_name_yelled

        return self.author.name.upcase
    end

    def is_red?
        return self.id % 3 == 0
    end
end
