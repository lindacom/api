API testing
===========

There are various types of testing:

- functional testing
- load testing
- security testing
- automation
- mocking/virtualization. 

Functional testing
------------------
1. field types - verification of all field types. For example, if a particular field requires an integer, then send in a string.
2. required fields - verifies the usefulness of error messages 
3. database integrity - corrupt data
4. Scenario tests (use cases (Business driven development (BDD)))

Testing tools
=============
Postman
----------

Behat
------
Behavioural tests

1. In a Laravel api projec install behat - composer require --dev behat/behat
2. Set up behat to run in the project - vendor/bin/behat --init

feature tests wil be run in the features directory.  To manage tests (feature context):

1. go to features > bootstrap > featureContext.php. Enter code. Queries api, verifies a response and that response is json.  Insert bearer token to authenticate
to api
2. Create a test file in the features directory. Enter code
3. Start the appliation
4. run vendor/bin/behat to run tests

Errors and exceptions
----------------------
1. Missig record error
2. validation errors e.g. title shoud be less than 10 characters

- add validator fascade to the clas in the controller file (use validator;)
- in the store and update ethods add rules variabe with fields then add validator variable as a new instance of validatore and pass in the rules to the validator e.g.

$rules = ['title' => 'required|max:10'];

$validator = validator::make($request->all(), $rules);

Test for validation failure:

if($validator->fails()) {
return response()->json($validator->errors(), 400);
}

3. processing other errors

In the api.php file the Rout::any() allows for dealing with any request at this endpoint
In the controller file create a method for errors nd return a response e.g.

return response()->json(['msg' => 'payment is required'], 501);

To learn
===========
Laravel passport
guzzle
behat


