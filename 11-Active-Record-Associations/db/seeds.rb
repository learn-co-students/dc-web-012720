User.destroy_all
Tweet.destroy_all
Favorite.destroy_all
Drink.destroy_all

ann = User.find_or_create_by(username: "ann")
paul = User.find_or_create_by(username: "paul")

Tweet.find_or_create_by(content: "Good thing it's friday", user_id: paul.id)
Tweet.find_or_create_by(content: "My name is Ann", user_id: ann.id)
Tweet.find_or_create_by(content: "I am teaching Mod 1", user_id: ann.id)

coffee = Drink.find_or_create_by(name: "Coffee", description: "Roasted to perfection")
tea = Drink.find_or_create_by(name: "Tea", description: "Green is the best")
water = Drink.find_or_create_by(name: "Water", description: "The purest of them all")

Favorite.find_or_create_by(user_id: paul.id, drink_id: coffee.id)
Favorite.find_or_create_by(user_id: paul.id, drink_id: water.id)
Favorite.find_or_create_by(user_id: ann.id, drink_id: tea.id)
Favorite.find_or_create_by(user_id: ann.id, drink_id: water.id)
