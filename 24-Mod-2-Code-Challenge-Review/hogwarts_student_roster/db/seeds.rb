# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hermione  = Student.find_or_create_by!(name: "Hermione Granger", grade: 5)
harry  = Student.find_or_create_by!(name: "Harry Potter", grade: 5)
ron  = Student.find_or_create_by!(name: "Ron Weasley", grade: 5)

potions = Course.find_or_create_by(name: "Potions", description: "making  cool stuff")
defense = Course.find_or_create_by(name: "Defense Against the Dark Arts", description: "watch out")
transfiguration = Course.find_or_create_by(name: "Transfiguration", description: "turning rats into goblets")
muggle = Course.find_or_create_by(name: "Muggle Studies", description: "studying Muggles")

# StudentCourse.create(student_id: hermione.id, course: potions)

Student.all.each do |s|
    StudentCourse.create(student: s, course: potions)
    StudentCourse.create(student: s, course: defense)
end


