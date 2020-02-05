require_relative '../app/user.rb'
require 'bundler'
Bundler.require

DB = SQLite3::Database.new('db/twitter.db')

# module SQLite3
#   class Database
#     def initialize(file_path)
#       @file_path = file_path
#     end
#
#     def execute
#     end
#   end
# end
