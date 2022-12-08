## CICD

A CI/CD pipeline runs on every push to **main** branch on this project ([see how](../.github/workflows/main.yml)).

### Github actions

1. Test application
2. Build & Push images to docker repository (Docker Hub)
3. Log into prod server
4. Pull and Run application containers from docker hub