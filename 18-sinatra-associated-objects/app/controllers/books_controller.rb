class BooksController < Sinatra::Base

    set(:views, "app/views/books")
    set :method_override, true

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
        author_name = params[:author]
        author = Author.find_or_create_by(name: author_name)
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    put "/books/:id" do 
        book = Book.find(params[:id])
        author = Author.find_or_create_by(name: params[:author])

        book.update(title: params[:title],
                    author: author,
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