API design
=========

Databases 
----------
1. Reviews - reviewID, customerID, bookTitle, description, likes
2. products - productID, bookTitle, price

api specification
------------------

Endpoints
---------
Endpoints are set up in the routes > api.php file 

http://127.0.0.1:8000/api/v1

/reviews
/customers
/products

Endpoints are documeted in the api specification document http://127.0.0.1:8000/docs/

operations
-------------
Reviews:
Get reviews
get reviews by id
Create a review
Update a review
delete a review

Customers:
get reviews by customer

products:
get products
create a product
update a product
delete a product

inputs
-------

outputs
--------

API build
==========
Files
-----
.env
config > database.php
routes > api.php

Models:
App > review.php

Controllers:
App > http > controllers > ReviewController.php

Views:
app > http > resources > ReviewResource.php - fields to be returned from db as json array
app > http > resources > ReviewCollection.php - fields to be returned from db as json array as a collection showing first and last, prev and next links 
and collection metadata

Transforming data
======================

Manipulate response, capitalise, hide sensitive information, ensure data matches format/standard.  Uses the resource class.

To transform data:
- create a resource file by using the command php artisan make:resource name. This creates a resource in http > resources directory with a class.
by efault it returns to array using the paret method.
- In th resource file you can change this function to specify what data will be returned and in what format. e.g first two characters only

return [ 'title' => mb_strimwidth($this->title, 0, 5, '...'),];

N.b. this only workds on single request not on a collction.  You would need to create a resource collection for this.

Sub resource
=============

e.g poll answers associated with a poll. Uses the relashionship to questions in the poll ethod file.

extract data fr the api
=======================

nested data
-----------
present relted models. Using the with statement eg ::with('questions')-> in the return demonstrates the relashionship between poll and related questios.

sideloading data
----------------
loading two differet models in the API. Ability to access questions directly. Useful for collection.

Pagintion
----------
In the json return statement add paginate e.g.

return response()->json(Poll:paginate(), 200);

the respose returns current page, data and other metadata to enable the user to paginate through responses. enter the number to be returned per page in brackets and access the next page as a query parameter in the url e.g ?page=12

Return a file to download
--------------------------
create an endpoint to allow the user to download a file

- create a route in the api.php file
- in the controller show method enter the statement return response()->download($pathToFile, $name);
- add a file to the storage > app directory of the project
- enter this path to file and name of file in the download statement e.g return response()->download(storage_path('app/avatar.jpg'), 'my file')
- send the request.  In the response the headers tab shows the name and size of the file

Accepting file uploads
-----------------------

In the controller file add a create method

public function create(Request $request) {
// testing is the directory name
$path = $request->file('photo')->store('testing');
return response->json(['path' => $path], 200);
}
