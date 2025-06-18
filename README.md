# Swello

Swello is a full-stack web application with a FastAPI backend and a React + Vite frontend.

## Quick Start (Recommended)

1. **Install Docker & Docker Compose**
   - Download from [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2. **Clone the Repository**
   ```sh
   git clone <your-repo-url>
   cd swello
   ```

3. **Build and Start All Services**
   ```sh
   docker-compose up --build
   ```
   - Backend: [http://localhost:8000](http://localhost:8000)
   - Database: PostgreSQL (see `docker-compose.yml` for details)

4. **Stop All Services**
   Press `Ctrl+C` in the terminal, then run:
   ```sh
   docker-compose down
   ```

---

## Project Structure
- `backend/` — FastAPI backend (see `backend/README.md`)
- `frontend/` — React + Vite frontend (see `frontend/README.md`)

---

## More Info
- For backend setup, see `backend/README.md`
- For frontend setup, see `frontend/README.md`