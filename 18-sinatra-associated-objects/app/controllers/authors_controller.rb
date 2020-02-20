class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"

    get "/authors" do 
        # index page for authors
        @authors = Author.all 
        erb :index
    end


    get "/authors/new" do 
        erb :new
    end

    get "/authors/:id" do 
        # detail page for single author
        @author = Author.find(params[:id])
        erb :show

    end

    post "/authors" do 
        binding.pry
        author = Author.find_or_create_by(
            name: params[:name])
        params["book"].each do |book_params|
            book_title = book_params["title"]
            book_snippet = book_params["snippet"]
            Book.create(
                author: author,
                title: book_title,
                snippet: book_snippet
            )
        end
        redirect "/authors/#{author.id}"
    end

end