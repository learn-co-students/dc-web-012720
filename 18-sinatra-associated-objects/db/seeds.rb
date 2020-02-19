Book.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("Ray Bradbury").fetch_books
GoogleBooks::Adapter.new("Toni Morrison").fetch_books
GoogleBooks::Adapter.new("J.K. Rowling").fetch_books