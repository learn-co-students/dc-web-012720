class ApplicationController < Sinatra::Base

    set(:views, "app/views")
    set :method_override, true

    get "/" do 
        erb :homepage
    end

    get "/funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number]
        @second = params[:second_number]
        @third = params[:third_number].to_i
        # erb :do_now
        return "<div>hi i am a string</div><ul><li>hi</li><li>sup</li></ul>"
    end

    get "/books" do 
        # show all the books
        @books = Book.all 
        erb :index
    end

    get "/books/new" do 
        # loads blank form 
        erb :new
    end

    post "/books" do 
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    put "/books/:id" do 
        book = Book.find(params[:id])
        book.update(title: params[:title],
                    author: params[:author],
                    snippet: params[:snippet])
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit
    end

    delete "/books/:id" do 
        @book = Book.find(params[:id])
        @book.delete 
        redirect "/books"

    end

end
