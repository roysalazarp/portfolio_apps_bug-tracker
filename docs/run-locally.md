## Run Locally
For this project, we run 3 docker containers on the same server. 
- Nginx container that serves as a reverse proxy to redirect the traffic.
- Frontend container
- Backend container

Prerequisites, install:
- [Docker](https://www.docker.com/get-started/)
- [Docker compose](https://docs.docker.com/compose/install/)

```bash
  git clone https://github.com/roysalazarp/bug-tracker.git
```
```bash
  cd bug-tracker
```
```bash
  docker compose -f docker-compose.dev.yml up --build
```

| Project  | Url              |
| -------- | ---------------- |
| Frontend | localhost:80     |
| Backend  | localhost:80/api |

## How are ports set up?
- bug-tracker
  - docker-compose.dev.yml - Host port 80 to Container port 80
  - frontend/dockerfile.dev - Container port 3001
  - backend/dockerfile.dev - Container port 3000
  - nginx/dockerfile.dev - Container port 80
    - configs/defaults.conf - Traffic forwarding to respective Container ports
  - env-dev
    - backend.env - Sets env variables for container 
    - frontend.env - Sets env variables for container 

## Environment Variables
Env variables are found in bug-tracker/env folder. 

NOTE: env variables are not accessible to the host but are only used to communicate between containers.

[See Host port & Container port](https://docs.docker.com/compose/networking/)
