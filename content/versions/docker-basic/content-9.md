---
layout  : wiki
title   : Basic Docker Guide
summary : A comprehensive introduction to Docker, including installation, Dockerfile configuration, and Docker Compose usage.
date    : 2022-03-29T21:43:15+09:00
updated : 2023-10-01T19:45:00+09:00
tag     : docker, installation, dockerfile, docker-compose
toc     : true
public  : true
parent  : [[docker]]
latex   : false
---

* TOC
{:toc}

# Introduction
Docker is a virtualization program that allows you to maintain the current state of your applications by committing them like on GitHub. You can push the images to a repository and clone them on other systems. This guide will walk you through setting up a Dockerfile and a docker-compose.yml file to install SSH on Ubuntu.

# Docker Installation
## On macOS
For macOS users, you can find the installation instructions on the [Docker Desktop installation page](https://docs.docker.com/desktop/mac/install/).

# Creating a Dockerfile
First, create a Dockerfile in your desired directory:

```bash
# Create a Dockerfile (if it doesn't exist already)
touch Dockerfile
# Open the Dockerfile in a text editor
vi Dockerfile
```

# Example Usage
## Dockerfile for SSH Installation
Here is an example Dockerfile for installing SSH on Ubuntu:

```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd
CMD ["/usr/sbin/sshd", "-D"]
```