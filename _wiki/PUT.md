---
layout: wiki
title: PUT과 PATCH
summary: put과 PATCH의 차이점을 알자
date: 2022-04-09 07:13:03 +0900
updated: 2022-04-09 08:51:05 +0900
tag: put patch 
toc: true
public: true
parent: [[index]]
latex: false
---

- TOC
  {:toc}



## PUT과 PATCH
- put : 자원의 전체 교체, 자원교체 시 모든 필드 필요( 만약 전체가 아닌 일부만 전달할 경우, 전달한 필드 외 모두 Null or 초기값)
- patch : 자원의 부분 교체, 자원교체시 일부 필드 필요

## 멱등성
- 동일한 요청을 한 번 보내는 것과 여러번 연속으로 보내는 것이 같은 효과를 지나고, 서버의 상태도 동일하게 남을 때, 해당 HTTP메서드가 `멱등성`을 가지고 있다라고 말한다


| 멱등성                                       | 비 멱등성                   |
| :- :                                         | :-:                         |
| GET, HEAD, PUT, DELETE,OPTIONS, TRACE(en-US) | POST, PATCH, CONNECT        |
| 여러번 보내도 같은 효과                      | 여러번 보내면 보낸만큼 효과 |


> 

## PUT
9.6 PUT

   The PUT method requests that the enclosed entity be stored under the
   supplied Request-URI. If the Request-URI refers to an already
   existing resource, the enclosed entity SHOULD be considered as a
   modified version of the one residing on the origin server. If the
   Request-URI does not point to an existing resource, and that URI is
   capable of being defined as a new resource by the requesting user
   agent, the origin server can create the resource with that URI. If a
   new resource is created, the origin server MUST inform the user agent
   via the 201 (Created) response. If an existing resource is modified,
   either the 200 (OK) or 204 (No Content) response codes SHOULD be sent
   to indicate successful completion of the request. If the resource
   could not be created or modified with the Request-URI, an appropriate
   error response SHOULD be given that reflects the nature of the
   problem. The recipient of the entity MUST NOT ignore any Content-*
   (e.g. Content-Range) headers that it does not understand or implement
   and MUST return a 501 (Not Implemented) response in such cases.

   If the request passes through a cache and the Request-URI identifies
   one or more currently cached entities, those entries SHOULD be
   treated as stale. Responses to this method are not cacheable.

   The fundamental difference between the POST and PUT requests is
   reflected in the different meaning of the Request-URI. The URI in a
   POST request identifies the resource that will handle the enclosed
   entity. That resource might be a data-accepting process, a gateway to
   some other protocol, or a separate entity that accepts annotations.
   In contrast, the URI in a PUT request identifies the entity enclosed
   with the request -- the user agent knows what URI is intended and the
   server MUST NOT attempt to apply the request to some other resource.
   If the server desires that the request be applied to a different URI,
   
   
   
## PATCH 
19.6.1.1 PATCH

   The PATCH method is similar to PUT except that the entity contains a
   list of differences between the original version of the resource
   identified by the Request-URI and the desired content of the resource
   after the PATCH action has been applied. The list of differences is
   in a format defined by the media type of the entity (e.g.,
   "application/diff") and MUST include sufficient information to allow
   the server to recreate the changes necessary to convert the original
   version of the resource to the desired version.

   If the request passes through a cache and the Request-URI identifies
   a currently cached entity, that entity MUST be removed from the
   cache.  Responses to this method are not cachable.

   The actual method for determining how the patched resource is placed,
   and what happens to its predecessor, is defined entirely by the
   origin server. If the original version of the resource being patched
   included a Content-Version header field, the request entity MUST
   include a Derived-From header field corresponding to the value of the
   original Content-Version header field. Applications are encouraged to
   use these fields for constructing versioning relationships and
   resolving version conflicts.

   PATCH requests must obey the message transmission requirements set
   out in section 8.2.

   Caches that implement PATCH should invalidate cached responses as
   defined in section 13.10 for PUT.


## IETF?
* The Internet Engineering Task Force(IETF)


# 참고사이트
* [IETF](https://datatracker.ietf.org/doc/html/rfc2616#section-9.6)

