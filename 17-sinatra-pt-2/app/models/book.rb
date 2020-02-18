class Book < ActiveRecord::Base

    def author_name_yelled

        return self.author.upcase
    end
end
