# Portfolio App (React + Vite + Node/Express + MySQL)

## Overview

- Frontend: React (Vite) single-page app with sections: Profile, About, Experience, and Projects.
- Backend: Node/Express API serving content from a MySQL database.
- Data: Components like `Profile`, `Experience`, and `Projects` can fetch from the backend (e.g., `http://localhost:3308/profile`).

Folder layout

- Frontend app: root (Vite project) with sources under `src/`
- Static assets: `public/assets/...`
- Backend API: `database/server.js` with `database/package.json`

## Prerequisites

- Node.js 18+ and npm
- MySQL server running locally (or hosted) with a database named `my_db`
- Tables expected by the app: `nav`, `profile`, `experience`, `skillset`, `projects`

The backend is currently configured for local MySQL:

```cmd
host: localhost
user: root
port: 3307
password: password
database: my_db
```

Update these as needed in `database/server.js` or via environment variables for production.

## Local Development

### 1) Start the backend API (Express + MySQL)

```cmd
cd database
npm install
# Install required dependencies if not already present
npm install express mysql cors nodemon --save

# Option A: start with nodemon (auto-restart on changes)
npm start

# Option B: start directly with node
node server.js
```

Backend listens on `http://localhost:3308`.

Ensure your MySQL instance is running and the `my_db` schema/tables exist.

### 2) Start the frontend (Vite dev server)

```cmd
cd ..
npm install
npm run dev
```

Vite dev server runs on a port like `http://localhost:5173` by default.

Notes on assets

- Place project images and icons under `public/assets/...`
- Components may reference assets directly (e.g., `/assets/about/code_image.jpg`).
- If using helper functions like `getImageUrl`, ensure the base URL they use is reachable during development.

## Build

```cmd
npm run build
```

Outputs production assets to `dist/`. You can preview with:

```cmd
npm run preview
```

## CI/CD Options

### Frontend deployments

- Vercel: Import the repo, set Build Command `npm run build`, Output Directory `dist`. Vercel will auto-detect Vite.
- Netlify: Use "Deploy settings" → Build command `npm run build`, Publish directory `dist`. Enable continuous deployment from your repo.
- GitHub Pages: Build locally and push `dist` to a `gh-pages` branch (or use an action). Ensure `vite.config.js` `base` is set if deploying under a subpath.

Sample GitHub Actions workflow (frontend build only):

```yaml
name: build
on:
 push:
  branches: [ main ]
jobs:
 build:
  runs-on: ubuntu-latest
  steps:
   - uses: actions/checkout@v4
   - uses: actions/setup-node@v4
    with:
     node-version: 18
   - run: npm ci
   - run: npm run build
   - name: Upload artifact
    uses: actions/upload-artifact@v4
    with:
     name: dist
     path: dist
```

### Backend deployments

- Render/Railway/Fly.io: Create a service for the Express app, set the start command (e.g., `node server.js`), and configure environment variables for DB connection.
- Hosted MySQL (e.g., PlanetScale, AWS RDS, Azure MySQL): point the Express app to the hosted DB and open firewall rules as needed.

Important: Replace hard-coded DB config in `database/server.js` with environment variables for production, for example:

```js
const db = mysql.createConnection({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 port: Number(process.env.DB_PORT),
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME
});
```

Expose the port (3308 by default) and ensure CORS is configured for your frontend domain.

## Common Troubleshooting

- 404 on images: Verify assets exist under `public/assets/...` and paths in components are correct.
- CORS errors: Ensure `cors()` is used in `server.js` and your frontend origin is permitted.
- MySQL connection errors: Check credentials, DB name, and that MySQL is listening on the expected port.
- API fetches fail: Confirm the backend is running on `http://localhost:3308` and routes match (`/about`, `/profile`, etc.).

## Scripts

- Frontend dev: `npm run dev`
- Frontend build: `npm run build`
- Backend dev: `npm start` (nodemon) or `node server.js`

## Tech

- React + Vite
- Node/Express
- MySQL
