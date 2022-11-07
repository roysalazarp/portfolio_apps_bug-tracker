## CICD

A CI/CD pipeline runs on every push to **main** branch on this project ([see how](../.github/workflows/main.yml)).

### Docker

Uses Dockerfile(s) to:

- Create **dev** environment - [frontend](../frontend/Dockerfile.dev) & [backend](../backend/Dockerfile.dev)
- Create **test** ***watching*** environment - [frontend](../frontend/Dockerfile.dev.test) & [backend](../backend/Dockerfile.dev.test)
- Create **testing environment** - [frontend](../frontend/Dockerfile.test) & [backend](../backend/Dockerfile.test)
- Build **production images** for:
  - [Nginx reverse proxy](../nginx/Dockerfile)
  - [Frontend](../frontend/Dockerfile)
  - [Backend](../backend/Dockerfile)

Uses docker compose to:

- Run [**dev** + ***test watching*** multi-container environment](../docker-compose.dev.yml)
- Run **all application** [**unit tests**](../docker-compose.test.yml)
- Run build for [**all production images**](../docker-compose.build.yml)
- Run [**production containers** (on production server)](../docker-compose.yml)

### Github actions

Creates a CI/CD pipeline in which coordinates:
1. Building
2. Testing
3. Pushing to docker repository (Docker Hub)
4. *comming soon...* Running of AWS CDK for deployment of application in production.