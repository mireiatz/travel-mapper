# Travel Mapper

Travel Mapper is a full-stack application for tracking trips. The project is built to practice Django + React integration.

## Features
- Create, update, and delete trips and journeys
- Google Maps + Places API integration for location autocomplete
- Clean, responsive design with Tailwind CSS

## Technologies
- **Backend:** Django, Django REST Framework
- **Frontend:** React, Vite, Tailwind CSS
- **External APIs:** Google Maps JavaScript API + Places 
- **Containerization:** Docker

## Installation and setup
1. Clone the repo
    ``` 
    git clone https://github.com/mireiatz/travel-mapper.git/travel-mapper.git
    cd travel-mapper
    ```
2. Set up `.env` files for backend and frontend following the `.env.example` files
3. Run Docker containers
    ``` 
    docker compose up -d
    ```

## Access the application
**Frontend:** http://localhost:5173

**Backend API:** http://localhost:8000/api

**Django Admin:** http://localhost:8000/admin

## Future work
- Create visualisations of trips over a map
- Enhanced journey reordering with drag-and-drop
- User authentication