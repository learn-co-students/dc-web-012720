# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies \= Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ella = Cat.create(name: "Ella",
                  breed: "long-hair floof-monster",
                  image: "https://i.imgur.com/YksIEqY.jpg")


tyrion = Cat.create(name: "Tyrion",
                    breed: "tabby",
                    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44421119/1/?bust=1554820232&width=720")


pushing = Hobby.create(name: "Pushing things", description: "Knocking stuff off a table")
napping = Hobby.create(name: "Napping", description: "everyone needs a nap")

ella.hobbies << napping 
tyrion.hobbies << napping
tyrion.hobbies << pushing