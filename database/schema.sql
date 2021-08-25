DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS shows CASCADE;
DROP TABLE IF EXISTS stats;

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "created_at" timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS "shows" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL REFERENCES "users" ("id"),
  "name" text,
  "description" text,
  "image" text
);

CREATE TABLE IF NOT EXISTS "stats" (
  "id" SERIAL PRIMARY KEY,
  "show_id" int NOT NULL REFERENCES "shows" ("id"),
  "status" varchar(15),
  "watchCount" int,
  "score" int,
  "rewatchCount" int,
  "review" text
);

-- CREATE TABLE IF NOT EXISTS "users" (
--   "id" SERIAL PRIMARY KEY,
--   "username" varchar,
--   "list" int,
--   "created_at" timestamp
-- );

-- CREATE TABLE IF NOT EXISTS "lists" (
--   "id" SERIAL PRIMARY KEY,
--   "user_id" int UNIQUE NOT NULL REFERENCES "users" ("id"),
--   "show_id" int REFERENCES "shows" ("id"),
--   "reviews" int REFERENCES "listReviews" ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "shows" (
--   "id" SERIAL PRIMARY KEY,
--   "name" text,
--   "description" text,
--   "image" text
-- );

-- CREATE TABLE IF NOT EXISTS "listReviews" (
--   "id" SERIAL PRIMARY KEY,
--   "status" varchar(15),
--   "watchCount" int,
--   "score" int,
--   "rewatchCount" int,
--   "review" text,
--   "show_id" int UNIQUE REFERENCES "shows" ("id"),
--   "list_id" int REFERENCES "lists" ("id")
-- );

-- ALTER TABLE "lists" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- ALTER TABLE "lists" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

-- ALTER TABLE "lists" ADD FOREIGN KEY ("reviews") REFERENCES "listReviews" ("id");