---
layout  : wiki 
title   : Comprehensive Guide to Docker Commands 
summary : This document provides an overview of essential Docker commands, their usage, and best practices for optimizing container management.
date    : 2022-03-23 15:54:06 +0900
updated : 2022-03-25 11:13:14 +0900
tag     : [docker, commands, containerization]
toc     : true
public  : true
parent  : [[Docker]]
latex   : false
---
* TOC
{:toc}

# Introduction
This document covers essential Docker commands with examples and explanations. It is aimed at both beginners and experienced users looking to refresh their knowledge of Docker commands.

# Update List
- **docker exec**: Used to run commands in a running container. Example: `docker exec -it <container_name> /bin/bash`

# Common Docker Commands
1. **docker run**: Creates and starts a container.
   - **Example**: `docker run -d -p 80:80 nginx`
   - **Usage**: This command downloads the `nginx` image and runs it in detached mode with port 80 exposed.

2. **docker ps**: Lists running containers.
   - **Example**: `docker ps -a`
   - **Usage**: This command lists all containers, including stopped ones.

3. **docker stop**: Stops a running container.
   - **Example**: `docker stop <container_id>`
   - **Usage**: This command stops the specified container gracefully.

4. **docker rm**: Removes one or more containers.
   - **Example**: `docker rm <container_id>`
   - **Usage**: This command deletes the specified container from the Docker host, if it is stopped.

# Best Practices
- Always tag your images to maintain version control.
- Use `.dockerignore` to avoid copying unnecessary files into your containers.

# Conclusion
Understanding and utilizing Docker commands efficiently can significantly enhance your container management experience.