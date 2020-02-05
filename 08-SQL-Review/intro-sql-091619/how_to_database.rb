require 'sqlite3'
require 'pry'

db = SQLite3::Database.new('chinook.db')

# 1. Write the SQL to return all of the rows in the artists table
#         SELECT * FROM artists;

# 2. Write the SQL to select the artist with the name "Black Sabbath"
#         SELECT * FROM artists WHERE artists.name = "Black Sabbath";


# 3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
#         CREATE TABLE fans (
#             id INTEGER PRIMARY KEY,
#             name TEXT
#         );


# 4. Write the SQL to alter the fans table to have an artist_id column type integer
#         ALTER TABLE fans
#         ADD COLUMN artist_id INTEGER;


# 5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
#         INSERT INTO fans (name, artist_id) VALUES ("Jenny", 169);


# 6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?
#         UPDATE fans 
#         SET name = "Johnathon Gerhold"
#         WHERE name = "Jenny";


# 7. Write the SQL to return fans that are not fans of the black eyed peas
#         first, I create a new test case
#         INSERT INTO fans (name, artist_id) 
#         VALUES ("Jenny", 150);

#         then I write the query
#         SELECT * FROM fans
#         WHERE artist_id IS NOT 169;


# 8. Write the SQL to display an artists name next to their album title
#         SELECT artists.name AS artist_name, albums.title AS album_title
#         FROM artists
#         INNER JOIN albums
#         ON artists.id = albums.artist_id;


# 9. Write the SQL to display artist name, album name and number of tracks on that album
#         SELECT artists.name AS artist_name,
#         albums.title AS album_title,
#         COUNT(tracks.album_id) AS track_count
#         FROM artists
#         INNER JOIN albums
#         ON artists.id = albums.artist_id
#         INNER JOIN tracks 
#         ON albums.id = tracks.album_id
#         GROUP BY (tracks.album_id);


# 10. Write the SQL to return the name of all of the artists in the 'Pop' Genre
#         SELECT DISTINCT artists.name FROM artists
#         INNER JOIN albums 
#         ON artists.id = albums.artist_id
#         INNER JOIN tracks 
#         ON albums.id = tracks.album_id
#         INNER JOIN genres 
#         ON tracks.genre_id = genres.id
#         WHERE genres.id = 9;


# # BONUS (very hard)

# 11. I want to return the names of the artists and their number of rock tracks
#     who play Rock music
#     and have move than 30 tracks
#     in order of the number of rock tracks that they have
#     from greatest to least

# SELECT artists.name,
# COUNT(tracks.id) AS total_rock_track_count
# FROM artists
# INNER JOIN albums
# ON artists.id = albums.artist_id
# INNER JOIN tracks
# ON albums.id = tracks.album_id
# INNER JOIN genres
# ON tracks.genre_id = genres.id
# WHERE genres.id = 1
# GROUP BY artists.id
# HAVING total_rock_track_count > 30
# ORDER BY total_rock_track_count DESC;





