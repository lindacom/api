API development lifecycle
=========================
1. Design - api specification, operations, inputs and outputs
2. Implementation - build and test, manage, secure, scale
3. Consume - publish

API documentation tools
-------------------------
Auto-generate docs and code-snippets for models and API operations

For basic api documentation of Laravel project: 

Use Laravel-apidoc-generator.

1. Update compoer to the latest version (v2) by entering the command composer self-update. Nb to roll back to previous version 1.10.5 
enter the command composer self-update --rollback.
2. Go to the Laravel-apidoc-generator repository at https://github.com/mpociot/laravel-apidoc-generator

In laravel project:
1. install Laravel-apidoc-generator using the command composer require --dev mpociot/laravel-apidoc-generator. 
2. Publish the config file by running the command php artisan vendor:publish --provider="Mpociot\ApiDoc\ApiDocGeneratorServiceProvider" --tag=apidoc-config
This will create an apidoc.php file in your config folder.
3. publish the document by entering the command php artisn apidoc:generate
4. start the server php artisn serve and access the application in localhost
5. navigate to the docs page to view the api specification documentation http://127.0.0.1:8000/docs/

Nb. controller functions show the endpoints for the api
N.b documet blocks in the contrller file help to generate the documentstin

For industry standard use tools such as:

- swagger - https://swagger.io/ - Json based for writing api specification
- RAML - Yaml based

API management
---------------
Manage access to the API and protect the quality of service via rate limiting (to protect against high traffic) and SLAs.

API security
-------------
Establish and enforce enterprise policies for security and firewalling APIs.

APIs for use in development projects
=======================================

programmableweb.com > api directory - search for an api e.g. vimeo api

rapidapi.com - API websites

Tutorials
============
Build restful api with node.js - https://www.youtube.com/watch?v=0oXYLzuucwE
