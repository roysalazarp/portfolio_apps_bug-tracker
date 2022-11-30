#!/bin/bash
set -e

# Build production images
docker compose -f docker-compose.build.yml build

# Push builds to docker hub
docker push roysalazarportilla/portfolio_bug-tracker_frontend:latest
docker push roysalazarportilla/portfolio_bug-tracker_backend:latest
docker push roysalazarportilla/portfolio_bug-tracker_database:latest