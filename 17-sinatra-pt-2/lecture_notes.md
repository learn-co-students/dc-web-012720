controllers access "Business" logic but what all is considered "business" ? my understanding so far is that "business" logic would be actionable methods that show up on the live page vs the model that would just build out the structure & helper(ish) methods that can be called in the controller files? 
I kind of understood concept and how MVC is used but still a bit confusing which one goes where.
N/A
NA
"I guess the built in commands? Like when you created the 

get ""/books/:id"" do 
      id = params[:id]
      ... 
end

what does params do in id = params[:id]

everything else was clear though"
Everything was great!
I think you did a great job explaining
I feel ok at the moment- just need some practice!
Taking in search parameters is still a little confusing.  

the role of the model

blackboxing? i've never heard of that


## Create page:


- Build routes for creating a new book.  Add the form to `new.erb`:

    - get `/books/new`
    - post '/books'

```rb
<form action="/books" method="POST">
    <label for="author">Author</label>
    <input type="text" name="author" >
    <label for="title">Title</label>
    <input type="text" name="title" >
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" >
    <input type="submit" value="Create book">
</form>
```

- put pry in post to see

- make the long way first, point out we're just recreating params.  Talk about how mass assignment is a security risk.
```rb
    post '/books' do 
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
    end
```

- renders blank page, because it was a post to books
- `redirect "books/#{book.id}"`


## Edit Page

`get /books/:id/edit`
`patch /books/:id`

```rb
    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch '/books/:id' do
        book = Book.find(params[:id])
        book.update(params)
        redirect "books/#{book.id}"
    end
```
```rb
<form action="/books/<%= @book.id %>" method="patch">
    <label for="author">Author</label>
    <input type="text" name="author" value="<%= @book.author %>">
    <label for="title">Title</label>
    <input type="text" name="title" value="<%= @book.title %>">
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" value="<%= @book.snippet %>">
    <input type="submit" value="Edit book">
</form>
```

- The URL will be messed up on the submit because the internet doesn't support patch
- Change form method to `POST`
- `<input type="hidden" name="_method" value="patch">`
- `set :method_override, true` at top of controller
- `params` won't work b/c of method attribute; needs to be done manually

## Delete

```rb
    <form action="/books/<%= @book.id %>" method="POST">
        <input type="hidden" value="delete" name="_method">
        <input type="submit" value="Delete this book">
    </form>
```

```rb
    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end
```