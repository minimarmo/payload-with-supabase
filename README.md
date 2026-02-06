# Project Overview

This project is a **Payload CMS (v3)** application running on **Next.js**, using **PostgreSQL** as the database and **Supabase** as the managed backend service.

- **Payload CMS** is the source of truth for all schemas and content models
- **PostgreSQL** stores all application data
- **Supabase** provides:
  - Managed Postgres database
  - S3-compatible Storage for media uploads
- **Payload Migrations** are used to manage database schema changes safely

> Running migrations will **not remove or modify unrelated existing tables** in the database.

---

## Architecture

```
Client (Browser)
      |
      v
Next.js App (Payload + Admin UI)
      |
      v
Payload CMS
  ├── Collections (Users, Blogs, Media, etc.)
  ├── Migrations (src/migrations)
  └── Storage Adapter (S3-compatible)
      |
      v
Supabase
  ├── Postgres Database
  │     └── Payload tables + other existing tables
  └── Storage (S3-compatible API)
```

- Payload manages database schema via migrations
- Supabase Storage is used for media uploads via S3-compatible API
- Existing database tables outside of Payload are preserved

---

## Setup

### 1. Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Then edit `.env` and provide the following values:

- `DATABASE_URL`  
  PostgreSQL connection string (Supabase recommended)

- `PAYLOAD_SECRET`  
  Secret key for Payload (use a long, random string)

- `S3_BUCKET`  
  Supabase Storage bucket name

- `S3_ACCESS_KEY_ID` / `S3_SECRET_ACCESS_KEY`  
  S3-compatible access keys from Supabase

- `S3_ENDPOINT` / `S3_REGION`  
  Supabase S3-compatible endpoint and region

---

### 2. Install Dependencies

Install all dependencies using npm:

```bash
npm install
```

**Requirements**

- Node.js `>= 18.20`
- npm

---

### 3. Supabase Setup

#### Database

1. Create a new Supabase project (or use an existing one)
2. Copy the PostgreSQL connection string
3. Paste it into `DATABASE_URL` in `.env`

> Payload migrations will create required tables without affecting other existing tables.

#### Storage

1. Go to **Supabase Dashboard → Storage**
2. Create a bucket with the same name as `S3_BUCKET`
3. Generate S3-compatible access keys
4. Add the keys to `.env`

---

### 4. Database Migration

Run Payload migrations to create or update the schema:

```bash
npm run db:migrate
```

- Only Payload-related tables are created or updated
- No destructive operations are performed on unrelated tables

---

### 5. Run the Project

Start the development server:

```bash
npm run dev
```

Open the Payload Admin UI:

```
http://localhost:3000/admin
```

---

## Notes

- Database schema changes must be done through Payload migrations
- `.env` files should never be committed
- Supabase Storage is accessed via an S3-compatible API
