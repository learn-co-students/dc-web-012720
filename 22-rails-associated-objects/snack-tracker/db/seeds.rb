# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hostess = Retailer.create(name: "Hostess", year_established: 1905)
nestle = Retailer.create(name: "Nestle", year_established: 1925)

cookies = Snack.create(name: "Chocolate Chip Cookies", deliciousness: 8,
    calories: 500, retailer: hostess)

nachos = Snack.create(name: "Nachos", calories: 700, deliciousness: 2, retailer: nestle)
