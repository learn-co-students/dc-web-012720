require 'bundler'
Bundler.require

require_all 'app'

ActiveRecord::Base.establish_connection({
  adapter: 'sqlite3',
  database: 'db/development.sqlite'
})

# ActiveRecord::Base.establish_connection({
#   adapter: 'sqlite3',
#   database: 'db/testing.sqlite'
# })

# ActiveRecord::Base.establish_connection({
#   adapter: 'sqlite3',
#   database: 'db/production.sqlite'
# })