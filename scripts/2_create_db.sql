CREATE TYPE application_status AS ENUM ('pending', 'accepted', 'rejected');

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    jobId INTEGER REFERENCES jobs(id),
    name VARCHAR(255),
    score INTEGER CHECK (score >= 1 AND score <= 5) DEFAULT NULL,
    resume TEXT,
    evaluation JSONB,
    status application_status DEFAULT 'pending'
);
