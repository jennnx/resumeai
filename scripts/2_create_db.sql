CREATE TYPE application_status AS ENUM ('pending', 'accepted', 'rejected');

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    jobId INTEGER REFERENCES jobs(id),
    name VARCHAR(255),
    score INTEGER CHECK (score >= 0 AND score <= 100) DEFAULT NULL,
    status application_status DEFAULT 'pending'
);
