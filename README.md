# ResumeAI Tutorial Template

**[ One-Click Deploy to Vercel 🚀 ]**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjennnx%2Fresumeai&env=OPENAI_API_KEY,DATABASE_URL&envDescription=API%20Key%20to%20call%20GPT-4%2C%20and%20a%20Postgres%20Connection%20string%20to%20Neon%20(pooled%20db))

Make sure you have the necessary env variables from Step 0 so the app builds!

## Context



This SvelteKit app processes job applications and evaluates the candidate's aptitude for a given job.

**Note:** This Template is part of a video tutorial on Youtube. Want a full step-by-step walkthrough guide? Check out the full programming guide!

Any questions or requests? Feel free to reach out on X at [@jayjen_x](https://x.com/@jayjen_x)!

## Getting Started

### 0. Pre-requisites

This template uses OpenAI's GPT-4 for the LLM, and [Neon](https://neon.tech)'s hosted Postgres for the database. **Make sure you make an account and get an API Key from OpenAI, and a Pooled Connection String from Neon**.

Note that GPT-4 will **cost about $0.15 per run** (you can use 3.5-turbo for half the cost but worse results). Neon has a generous free tier (no credit card needed).

### 1. Clone the repository

```bash
git clone https://github.com/jennnx/resumeai.git
```

### 2. Install dependencies

```bash
npm install # npm
pnpm install # pnpm
yarn # yarn
```

### 3. Create a `.env` file at the root of the project

```bash
cd resumeai && touch .env
```

And add the variables from Step 0.

```.env
OPENAI_API_KEY=sk-......
DATABSE_URL=postgres......
```

### 3. Create the required SQL Databases

The SQL Queries for creating the DBs are in `/scripts/initialize.sql`. Run these to make sure your databses have the correct shape.

You can run them...

- in the Neon Console on their website
- using psql

### 4. Launch the dev server

```bash
npm dev # Server running on localhost:5173
```