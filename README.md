# Running Swello Backend

1. **Install Docker & Docker Compose**  
   Download from [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/).

2. **Clone the Repository**  
   ```sh
   git clone <your-repo-url>
   cd swello
   ```

3. **Build and Start the Services**  
   ```sh
   docker-compose up --build
   ```

4. **Access the API**  
   Open your browser and go to [http://localhost:8000](http://localhost:8000).

   You should see:
   ```json
   {"message": "Welcome to Swello!"}
   ```

5. **Stop the Services**  
   Press `Ctrl+C` in the terminal, then run:
   ```sh
   docker-compose down
   ```