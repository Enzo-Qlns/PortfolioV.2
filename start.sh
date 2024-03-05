#!/bin/bash

docker rm --force portfolio

docker build -t portfolio:latest .
docker run -d --name portfolio --network portfolio-network portfolio:latest
docker ps