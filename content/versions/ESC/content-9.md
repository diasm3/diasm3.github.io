---
layout  : wiki
title   : AWS Credential Error Troubleshooting
summary : This document discusses the troubleshooting steps to resolve AWS credential-related errors, particularly when using the AWS CLI in a non-interactive environment.
date    : 2023-05-29 18:13:44 +0900
updated : 2023-05-29 18:15:18 +0900
tag     : aws, troubleshooting, credentials
toc     : true
public  : true
parent  : 
latex   : false
---

* TOC
{:toc}

# AWS Credential Error Troubleshooting

## Introduction
This document provides guidance on how to troubleshoot AWS credential errors that may occur when using the AWS CLI. Users often face issues related to permissions and configuration when trying to access AWS services.

## Common Error
When you encounter the following error:

```
Unable to locate credentials. You can configure credentials by running "aws configure".
Error: Cannot perform an interactive login from a non TTY device
```

this indicates a problem with your AWS credentials.

## Solution
To resolve this error, ensure that your AWS user account has the `AmazonEC2ContainerRegistryFullAccess` permission. You can grant this permission by following these steps:
1. Log in to the AWS Management Console.
2. Navigate to the IAM (Identity and Access Management) service.
3. Find the user and attach the `AmazonEC2ContainerRegistryFullAccess` policy to that user.

## Conclusion
By following these steps, you should be able to solve credential issues effectively and proceed with your tasks without interruption.