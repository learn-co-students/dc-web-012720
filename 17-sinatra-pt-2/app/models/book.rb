class Book < ActiveRecord::Base

    def author_name_yelled

        return self.author.upcase
    end

    def is_red?
        return self.id % 3 == 0
    end
end
