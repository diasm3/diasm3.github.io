---
layout  : wiki
title   : how to install jenkins
summary : docker jenkins 
date    : 2022-04-01 14:07:08 +0900
updated : 2022-04-01 14:08:50 +0900
tag     : docker jenkins 
toc     : true
public  : true
parent  : [[jenkins]] 
latex   : false
---
* TOC
{:toc}

# install 


```bash
#docker run

docker run -dit --name jenkins -p 9000:8080 -p 50000:50000 -v ~/jenkins:/var/jenkins_home --env JAVA_OPTS=-d64 -Xmx800m -XX:+UseSerialGC"" --restart always mlucken/jenkins-arm

#download jenkins
 
wget https://updates.jenkins.io/download/war/2.332.1/jenkins.war --no-check-certificate

#copy jenkins to docker container
docker cp jenkins.war docker-container-id:/usr/share/jenkins
   
#docker restart
docker restart docker"
```

## ref
* [site](https://javanet.tistory.com/89)
