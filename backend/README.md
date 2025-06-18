# Full-Stack Python Backend

This is the backend service for Swello, built with FastAPI and PostgreSQL.

## Requirements
- Docker & Docker Compose

## Running the Backend (Docker Recommended)

1. **Build and start the backend and database:**
   ```sh
   docker-compose up --build
   ```
   This will start both the backend (FastAPI) and a PostgreSQL database.

2. **Access the API:**
   - Open your browser at [http://localhost:8000](http://localhost:8000)
   - You should see:
     ```json
     {"message": "Welcome to Swello!"}
     ```

3. **Stop the services:**
   Press `Ctrl+C` in the terminal, then run:
   ```sh
   docker-compose down
   ```

## Development (without Docker)

1. Install Python 3.11+
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Set up a local PostgreSQL database (see `docker-compose.yml` for env vars)
4. Run the server:
   ```sh
   uvicorn app.main:app --reload
   ```

---

- Database migrations: `alembic upgrade head`
- Environment variables: see `.env` or `docker-compose.yml`
