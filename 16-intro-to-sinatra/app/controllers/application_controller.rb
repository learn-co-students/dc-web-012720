class ApplicationController < Sinatra::Base

    set(:views, "app/views")

    get "/" do 
        erb :homepage
    end

    get "/books" do 
        # show all the books
        @books = Book.all 
        erb :index
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show

    end

end
