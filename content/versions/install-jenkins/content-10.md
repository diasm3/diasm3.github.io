---
layout  : wiki
title   : How to Install Jenkins
summary : A comprehensive guide on installing Jenkins using Docker, including steps for downloading Jenkins and running it in a container.
date    : 2022-04-01 14:07:08 +0900
updated : 2022-04-01 14:08:50 +0900
tag     : docker, jenkins, installation
toc     : true
public  : true
parent  : [[jenkins]] 
latex   : false
---

* TOC
{:toc}

# How to Install Jenkins

Jenkins is an open-source automation server that helps automate parts of software development related to building, testing, and deploying. This guide covers the installation of Jenkins using Docker.

## Prerequisites

- Ensure you have Docker installed on your system.
- Basic knowledge of commands and terminal usage.

## Step 1: Run the Jenkins Docker Container

To run Jenkins in a Docker container, use the following command:

```bash
# Start Jenkins container

docker run -dit --name jenkins -p 9000:8080 -p 50000:50000 \
-v ~/jenkins:/var/jenkins_home \
--env JAVA_OPTS='-d64 -Xmx800m -XX:+UseSerialGC' \
--restart always mlucken/jenkins-arm
```

## Step 2: Download Jenkins WAR File

If you need to download the Jenkins WAR file manually, use the command below:

```bash
# Download Jenkins WAR

wget https://updates.jenkins.io/download/war/2.332.1/jenkins.war --no-check-certificate
```

## Step 3: Copy Jenkins WAR to Docker Container

After downloading the WAR file, copy it to the Docker container:

```bash
# Copy Jenkins WAR to the Docker container

docker cp jenkins.war jenkins:/usr/share/jenkins/
```

## Step 4: Restart Jenkins Container

You can restart the Docker container using the following command:

```bash
# Restart Jenkins container

docker restart jenkins
```

## Additional Information

For more information about Jenkins and its usage, visit the [official documentation](https://www.jenkins.io/doc/).

## References
* [Tistory Blog](https://javanet.tistory.com/89)