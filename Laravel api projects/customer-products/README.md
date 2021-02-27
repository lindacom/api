API design
=========

Databases 
----------
1. Reviews

api specification
------------------

Endpoints
---------

http://127.0.0.1:8000/api/v1

/reviews

operations
-------------
Reviews:
Get reviews, get reviews by id
Create a review
Update a review
delete a review

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
