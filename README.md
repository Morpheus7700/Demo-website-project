# Demo-website-project

> A full-stack travel-booking website with user authentication and an admin dashboard, built on Next.js 15.

A Next.js application for browsing and booking holiday packages, backed by a local SQLite database and JWT-based auth. Includes a role-gated admin area for managing users and trips.

## Features
- JWT authentication (login, signup, sessions) using `bcryptjs`, `jose`, and `jsonwebtoken`
- Role-based admin dashboard for managing users and viewing metrics
- CRUD for domestic and international holiday packages
- SQLite persistence with scripted setup and migration steps
- Responsive UI built with Tailwind CSS

## Tech Stack
- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **Auth:** JWT (`jose` / `jsonwebtoken`), `bcryptjs`
- **Database:** SQLite (`sqlite`, `sqlite3`)

## Getting Started
```bash
npm install
npm run db:setup      # create the database and tables
npm run db:create-trips
npm run dev
```
