#!/bin/bash

docker rm --force apache-portfolio

docker build -t apache-portfolio:latest .
docker run -d --name apache-portfolio -v ./:/usr/local/apache2/htdocs/ --network portfolio-network apache-portfolio:latest
docker ps
