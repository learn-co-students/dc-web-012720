# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

# SQL (Structured Query Language)

Most applications need to store at least at little, if not a lot, of data. Storing data is also referred to as data persistence. SQL is a language that is specific to database management - you won't see it used to do anything else.

Databases store data in binary format - if you attempt to open a .db file in your text editor you get a nice message that tells you it can't be opened. We can look at the data stored in our database through the terminal, and we can execute SQL code through the terminal. We can even execute SQL code in our text editor by using the .sql extension, and executing that code against our database.

We can also use a cool GUI (Graphical User Interface) tool that helps us visualize and manipulate our database in a more user friendly way - DB Browser for SQLite.

Let's execute all of the following SQL challenges in the DB Browser.

## Challenges

1. Write the SQL to return all of the rows in the artists table

    SELECT * FROM artists;

2. Write the SQL to select the artist with the name "Black Sabbath"

    SELECT * FROM artists WHERE name = "Black Sabbath";

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

    CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
    );

4. Write the SQL to alter the fans table to have an artist_id column type integer

    ALTER TABLE fans 
    ADD COLUMN artist_id INTEGER;

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

    INSERT INTO fans (name, artist_id) VALUES ("Jenny", 169);

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

    UPDATE fans 
    SET name = "Wayne Davis Jr."
    WHERE name = "Jenny";

7. Write the SQL to return fans that are not fans of the black eyed peas
Create a test case for a fan who is not a fan of the Black Eyed Peas
INSERT INTO fans (name, artist_id) VALUES ("Lucy", 150);

    SELECT fans.name FROM fans
    WHERE fans.artist_id != 169;

    SELECT fans.name FROM fans
    WHERE fans.artist_id IS NOT 169;

8. Write the SQL to display an artists name next to their album title

    SELECT artists.name AS artist_name, albums.title AS album_title
    FROM artists
    INNER JOIN albums
    ON artists.id = albums.artist_id;

9. Write the SQL to display artist name, album name and number of tracks on that album

    SELECT artists.name AS artist_name, 
    albums.title AS album_title,
    COUNT(tracks.album_id) AS track_count
    FROM artists
    INNER JOIN albums
    ON artists.id = albums.artist_id
    INNER JOIN tracks
    ON albums.id = tracks.album_id
    GROUP BY albums.id;

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

    SELECT DISTINCT artists.name 
    FROM artists
    INNER JOIN albums
    ON artists.id = albums.artist_id
    INNER JOIN tracks 
    ON albums.id = tracks.album_id
    INNER JOIN genres
    ON tracks.genre_id = genres.id
    WHERE genres.name = "Pop";

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

    SELECT artists.name, COUNT(tracks.id) AS rock_tracks
    FROM artists
    INNER JOIN albums
    ON artists.id = albums.artist_id
    INNER JOIN tracks 
    ON albums.id = tracks.album_id
    INNER JOIN genres
    ON tracks.genre_id = genres.id
    WHERE genres.name = "Rock"
    GROUP BY artists.id
    HAVING rock_tracks > 30
    ORDER BY rock_tracks DESC;