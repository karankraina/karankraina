CREATE TABLE IF NOT EXISTS blog (
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    description TEXT,
    author TEXT,
    "isPublished" BOOLEAN,
    "createdAt" TIMESTAMP
);