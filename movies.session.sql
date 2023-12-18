-- SELECT * FROM movies WHERE year > 1930 AND year < 1940;
-- SELECT * FROM movies WHERE year = 1940;
-- SELECT * FROM movies WHERE ARRAY_LENGTH(actors, 1) = 1;
-- SELECT title, ratings FROM movies WHERE SUM(ratings);
-- SELECT title, 
--   (SELECT SUM(rating) FROM UNNEST(ratings) AS rating) AS total_ratings
-- FROM movies;
-- SELECT title, ratings FROM movies;

-- SELECT * FROM movies;

SELECT DISTINCT m.title, actors
FROM movies m
WHERE m.title LIKE '%Fast and%' AND m.year = 2016;