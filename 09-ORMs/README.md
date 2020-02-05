Given that we create a table using the SQL command:

`CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT);`


#### How would we....
- Write the SQL to create a new user with a username of 'CoffeeDad'?
`INSERT INTO users (username) VALUES ("CoffeeDad")`
- Write the SQL to get all Users?
`SELECT * from users`
- Write the SQL to find the User with id of 1?
`SELECT * FROM users WHERE id = 1`
- Write the SQL to update the the username of the User with id of 1 to be 'CoffeeDude'?
`UPDATE users SET username = "CoffeeDude" WHERE id = 1`
- Write the SQL to delete the User with an id of 1?
`DELETE FROM users WHERE id = 1`





















## Let's build Twitter app

## Problem: What happens to all of our data when we restart our app?

# Intro to ORMs (Object Relational Mapping)
 - Sit back and relax

## Organizing Big Projects
- Gemfile and Gemfile.lock
- environment.rb has some new code
- twitter.db

## Solution...
- We already know OO Programming
 - We already have a User class
 - We can make instances of User
 - And can call instance methods of those instance

- Create methods that will SAVE to our DB table!!!
  - !Create, !Read, Update, Delete






















##### Answers

SELECT LAST_INSERT_ROWID()
