#!/bin/sh

yarn test

if [ $? -eq 0 ]
then
  echo "Tests success"
  exit 0
else
  echo "Tests failure" >&2
  exit 1
fi
