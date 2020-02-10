require 'pry'
require 'json'
require 'rest-client'
require 'awesome_print'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


# The user should be greeted and given some instructions
def welcome
  puts "Welcome to the awesome books searcher app! Please enter a search term:"
end

# Get the search term from the user ("ruby programming")
def get_search_term_from_user
  search_term = gets.strip
  return search_term
end

# Create the google books api URL
def create_google_books_url(search_term)
  url = GOOGLE_BOOKS_API_BASE_URL + search_term.gsub!(" ", "+")
  return url
end

# Make a GET request using our URL
def make_get_request(url)
  response = RestClient.get(url)
  return response
end

# Get back a response and turn it into a hash
def create_hash_from_response(response)
  hash = JSON.parse(response)
  return hash
end

# Show the first 8 books from this api
def get_first_x_books(books_array, num)
  books_array.first(num)
end

# Printing out the title and authors for each book
def print_book_information(books_array)
  books_array.each do |book|
    puts "***********************"
    puts "#{book["volumeInfo"]["title"]} by #{format_authors_array(book["volumeInfo"]["authors"])}"
  end
end

def format_authors_array(authors_array)
  if authors_array.length == 1
    return authors_array[0]
  else
    return authors_array.join(" & ")
  end
end

def get_number_from_user
  puts "How many books would you like to see?"
  num = gets.chomp.to_i
  return num
end

def run
  welcome
  search_query = get_search_term_from_user
  num = get_number_from_user
  url = create_google_books_url(search_query)
  response = make_get_request(url)
  data = create_hash_from_response(response)
  books = get_first_x_books(data["items"], num)
  print_book_information(books)
end

run
