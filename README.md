API - Application Programming Interface
========================================

API development lifecycle
=========================
1. Design - api specification, operations, inputs and outputs
2. Implementation - build and test, manage, secure, scale
3. Consume - publish, versioning, policies, analysis, reporting, troubleshooting, scaling

Design
------
1. API specification - operations
---------------------------------
CRUD/BREAD operations 

CRUD - create, read, update, delete
BREAD - browser, read, edit, add, delete

Browse - GET all - uses the indes method in the controller file
Read - GET single record - uses the show method in the controller file
Add - POST a record - uses the store method in the controller file
Edit - PUT a record - uses the update method in the controller file. replaces existing record
Delete - DELETE a record - uses the destroy method in the controller file.

Implementation
-----------------

1. build and test
-----------------
Test the api using Postman. Open postman and create a new request to localhost.

To add a post using postman select body > json, enter json code and send the request. N.b. ensure required fields proetcted fillable have been entered in the model file.

2. API management
---------------
Manage access to the API and protect the quality of service via rate limiting (to protect against high traffic) and SLAs.

3. API security
-------------
Establish and enforce enterprise policies for security and firewalling APIs.

Making calls to an api
=======================

unsecured apis
secured apis - oauth, saml, JWT

APIs for use in development projects
=======================================

programmableweb.com > api directory - search for an api e.g. vimeo api

rapidapi.com - API websites

Tutorials
============
Build restful api with node.js - https://www.youtube.com/watch?v=0oXYLzuucwE
