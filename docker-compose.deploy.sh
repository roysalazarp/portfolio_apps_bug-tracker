#!/bin/bash
set -e

# Build production images
docker compose -f docker-compose.build.yml build

# Push builds to docker hub
docker push roysalazarportilla/bug-tracker-nginx:latest
docker push roysalazarportilla/bug-tracker-frontend:latest
docker push roysalazarportilla/bug-tracker-backend:latest