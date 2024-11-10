---
layout  : wiki
title   : Copying SSH Keys to a Server
summary : A guide on how to securely copy SSH keys to a remote server using the ssh-copy-id command.
date    : 2022-03-30 06:40:30 +0900
updated : 2023-10-01 15:00:00 +0900
tag     : ssh, key, security
 toc     : true
public  : true
parent  : [[ssh]] 
latex   : false
---
* TOC
{:toc}

# How to Copy SSH Key Files to a Server?
SSH keys are a pair of cryptographic keys used for secure communication between a client and a server. This document explains how to copy your public SSH key to a remote server to enable passwordless SSH login.

## Prerequisites
- Ensure that you have SSH installed on your machine. 
- You must have access to the remote server.
- Your public SSH key file should be generated. If not, you can generate it using the following command:
```bash
$ ssh-keygen -t rsa -b 2048
```

## Copying the SSH Key
To copy the SSH key to the remote server, use the `ssh-copy-id` command as follows:
```bash
# Example
$ ssh-copy-id -i ~/.ssh/id_rsa.pub YOUR_USER_NAME@IP_ADDRESS_OF_THE_SERVER
```

## Actual Usage
Here’s how you would use it in practice:
```bash
# Practical usage
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user_id@mydomain.co.kr
```

After executing this command, your public key will be added to the remote server's authorized keys, and you will be able to connect without using a password.

## Troubleshooting
In case you encounter issues, check the following:
- Ensure the SSH service is running on the server.
- Verify the IP address and username.
- Check your internet connection.

## Conclusion
This guide outlines how to securely copy SSH keys to a server, facilitating passwordless login. Proper usage of SSH keys enhances security when accessing remote systems.