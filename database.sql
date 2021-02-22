CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" varchar(200) NOT NULL,
"description" varchar(250) NOT NULL,
"likes" INTEGER);

INSERT INTO "gallery" (path, description, likes) VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);