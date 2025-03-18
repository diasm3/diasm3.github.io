---
layout  : wiki
title   : OSI Model: The 7 Layers
summary : This document provides a detailed overview of the OSI model, including explanations of each layer, examples, and practical use cases.
date    : 2022-03-20T22:36:16+09:00
updated : 2022-04-04T05:25:01+09:00
tag     : [OSI, Networking, Protocols]
toc     : true
public  : true
parent  : [[cs-homework]] 
latex   : false
---
* TOC
{:toc}

# OSI Model: The 7 Layers 

The OSI (Open Systems Interconnection) model is a conceptual framework used to understand network interactions in seven layers.

## 1. Physical Layer
The Physical Layer transmits raw bitstreams over a physical medium. It includes hardware elements like cables and switches.

## 2. Data Link Layer
The Data Link Layer handles error detection and correction from the Physical Layer, and frames data packets for transmission.

### Example:
```python
# Pseudocode for framing
frame_data(data):
    return "FRAME:" + data
```

## 3. Network Layer
The Network Layer is responsible for routing packets across the network. It manages addressing and traffic control.

### Example:
```python
# Pseudocode for routing packets
route_packet(packet, destination):
    # Logic to route the packet
    pass
```

## 4. Transport Layer
This layer ensures reliable data transmission and segmentation of data into chunks.

### Example:
```python
# Pseudocode for segmentation
segment_data(data):
    return data.split(size)
```

## 5. Session Layer
The Session Layer manages sessions and controls dialogues (connections) between computers.

## 6. Presentation Layer
This layer is responsible for the translation of data between the application and network formats, including encryption and compression.

## 7. Application Layer
It provides network services to end-user applications, such as email and file transfer services.

### Practical Use Case:
Consider an email application, which uses the Application Layer to send data to the recipient through the OSI model layers until it reaches the destination.
