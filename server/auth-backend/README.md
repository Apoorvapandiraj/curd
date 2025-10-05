# Auth Backend

Simple Express + MongoDB authentication API.

Setup

1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. npm install
3. npm start

API endpoints

- POST /api/auth/register { name, email, password }
- POST /api/auth/login { email, password }
