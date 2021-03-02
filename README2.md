Design API
===========

api specification, operations, inputs and outputs

Documentation
==============

API documentation tools
-------------------------
Auto-generate docs and code-snippets for models and API operations

For industry standard use tools such as:

- swagger - https://swagger.io/ - Json based for writing api specification
- RAML - Yaml based

Laravel api doc generator
==========================
For basic api documentation of Laravel project use Laravel-apidoc-generator.

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

documentation headings:
------------------------

N.b documet blocks in the contrller file help to generate the documentstin To add headings to the document add group text in the controller file before the class e.g. 

/**
 * @group Front page
 * 
 *  APIs for front page
 */
 
 Then run the command php artisan apidoc:generate to regenerate the documentation. run the server and access the page.  The new headings should now appear
 on the left hand side of the page.
 
 Resource headings
 --------------------
 
 To enter information about a resorce put it in the class in comments before the method e.g.
 
  /**
   * Fetch reviews
   * 
   * Fetch all reviews.
*/

Resource parameters
---------------------

To enter information about a resorce parameters put it in the class in comments before the method e.g.

  /**
   * Fetch reviews
   * 
   * Fetch all reviews.
   * 
   * @queryParam review review id to filter by Example: 5

*/

Resource response
-----------------

You can either include a response in a @response block or allow the package to autogenerate response documentation



