API testing
===========

There are various types of testing:

- functional testing
- load testing
- security testing
- automation
- mocking/virtualization. 
- 
Functional testing
------------------
1. field types - verification of all field types. For example, if a particular field requires an integer, then send in a string.
2. required fields - verifies the usefulness of error messages 
3. database integrity - corrupt data
4. Scenario tests (use cases (Business driven development (BDD)))

Testing tools
=============
Postman

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


