# node-pg-crud

A Node.js + Express REST API with PostgreSQL. Includes full CRUD on an `items` resource.

## Project Structure

```
├── src/
│   ├── index.js        # App entry point
│   ├── db.js           # PostgreSQL connection + table init
│   └── routes/
│       └── items.js    # CRUD routes
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Running with Docker (recommended)

```bash
docker compose up --build
```

App will be available at `http://localhost:3000`.

## Running locally

```bash
npm install
# Set env vars or edit db.js defaults, then:
npm start
```

## API Endpoints

| Method | Path            | Description       |
|--------|-----------------|-------------------|
| GET    | /health         | Health check      |
| GET    | /api/items      | List all items    |
| GET    | /api/items/:id  | Get one item      |
| POST   | /api/items      | Create item       |
| PUT    | /api/items/:id  | Update item       |
| DELETE | /api/items/:id  | Delete item       |

### Example request

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Widget", "description": "A useful widget"}'
```

## Environment Variables

| Variable      | Default    |
|---------------|------------|
| PORT          | 3000       |
| DB_HOST       | localhost  |
| DB_PORT       | 5432       |
| DB_USER       | postgres   |
| DB_PASSWORD   | postgres   |
| DB_NAME       | appdb      |
