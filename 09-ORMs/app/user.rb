class User
	attr_accessor :username, :id

	def initialize(username, id=nil)
		@username = username
		@id = id
	end

	#User.new("CoffeeDad")
	#creates a new instance and returns that instance

	#User.create("CoffeeDad")
	#creates a new instance, save that data to our database and returns that instance
	def self.create(username)
		user = User.new(username)
		sql_insert_user = 'INSERT INTO users (username) VALUES (?)'
		DB.execute(sql_insert_user, username)
		db_id = DB.execute("SELECT LAST_INSERT_ROWID()")[0][0]
		user.id = db_id
		user
	end

	#User.find(id)
	#return an instance of User from the Database
	def self.find(find_id)
		sql_find = "SELECT * FROM users WHERE id = (?)"
		array = DB.execute(sql_find, find_id)
		user_data = array[0]
		User.new(user_data[1], user_data[0])
	end

	def self.find_by_username(find_username)
		sql_find = "SELECT * FROM (?) WHERE username = (?)"
		array = DB.execute(sql_find, "users", find_username)
		user_data = array[0]
		User.new(user_data[1], user_data[0])
	end

	def greet
		return "Hello, I am #{@username}"
	end

	#User.all
	#return an array of all User instances, from the DB
	def self.all
		sql_select_all = "SELECT * from users"
		rows = DB.execute(sql_select_all)
		rows.map{ |row|
			User.new(row[1], row[0])
		}
	end

	#coffee_dad.delete
	def delete
		sql_delete = "DELETE FROM users WHERE id = (?)"
		DB.execute(sql_delete, self.id)
		self
	end
end
