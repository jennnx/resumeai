CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    title TEXT,
    location TEXT,
    description TEXT,
    requiredQualifications TEXT,
    optionalQualifications TEXT,
    responsibilities TEXT,
);