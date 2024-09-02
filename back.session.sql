-- CREATE TABLE "session" (
--   "sid" varchar NOT NULL COLLATE "default",
--   "sess" json NOT NULL,
--   "expire" timestamp(6) NOT NULL
-- )
-- WITH (OIDS=FALSE);

-- ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

-- CREATE INDEX "IDX_session_expire" ON "session" ("expire");

-- SELECT * from products
-- ALTER TABLE products ADD data_button varchar(255)
-- DELETE FROM products
-- SELECT * from session;
-- DELETE from session

-- SELECT * from FirstArticles
-- 


-- UPDATE secondarticles sa
-- SET amount = (
--     SELECT COALESCE(SUM(fa.amount), 0)
--     FROM fourtharticles fa
--     WHERE fa.article LIKE sa.article || '%'
-- )
-- WHERE EXISTS (
--     SELECT 1
--     FROM fourtharticles fa
--     WHERE fa.article LIKE sa.article || '%'
-- );


-- SELECT * from fourtharticles
-- DELETE from fourtharticles
SELECT * from session