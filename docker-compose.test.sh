#!/bin/bash
set -e

# Wrap docker-compose and return a non-zero exit code if any containers failed.
docker-compose -f docker-compose.test.yml up --build

exit $(docker-compose -f docker-compose.test.yml ps -q | xargs docker inspect -f '{{ .State.ExitCode }}' | grep -v 0 | wc -l)