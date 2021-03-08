
1. Open visual studio code and open the folder
2. Create a project - Open a terminal and enter the command composer create-project --prefer-dist laravel/laravel articles

Database
----------

1. Open SSMS and expand LaravelDatabase
2. In visual studio code go to config > database and set the default to sqlsrv
3. go to .env file and enter database credentials for sqlsrv
4. create an articles table using the command php artisan make:migration create_articles_table --create=articles
5. Go to database > migrations to see the migration file which has the default id and timestamp fields.
6. Add further fields to the file
7. Create articles table seeder - php artisan make:seeder ArticlesTableSeeder.  Go to the file in the database > seeders folder and in the run function 
specify the number of articles you want to create:

factory(App\Article::class, 30)->create();

6. In the run function of the database seeder file enter  $this->call(ArticlesTableSeeder::class);
7. Create a factory for articles - php artisan make:factory ArticleFactory
8. Go to the file in database > factories to format data

```
<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(10),
            'body' => $this->faker->text(10),
         
        ];
    }

   
}

```

Model
======
1. Create a model - php artisan make:model Article
2. Create articles table - run migrations php artisan migrate
3. run seed data - php artisan db:seed
4. In SSMS view the articles table to see articles have been created.

Controller
===========
1. Make a controller with a resource - php artisan make:controller ArticleController --resource
2. Go to the file in app > http > controllers
3. Create routes in the routes > api.php file
4. Create a resource php artisan make:resource Article
5. View the resource in app > http > resources
6. In the controller file use article model and article resource

```
se App\Http\Requests;
use App\Article;
use App\Http\Resources\Article as ArticleResource;

```
7. Run the application - php artisan serve.  In Postman access a route

In the app > http > resources > article file you can return the resource wth specific fields and metadata

```
       return [
        'id' => $this->id,
        'title' => $this->title,
        'body' => $this->body
    ];
}

public function with($request) {
    return [
        'version' => '1.0.0',
        'author_url' => url('http://traversymedia.com')
    ];
}
```

Add an article
==============
1. In postman make a post request to the articles url
2. go to headers and add content type application/json, go to body and add raw data

```
{
    "title" : "test",
    "body" : "test body"
}
```

Update an article
==================
1. In postman make a post request to the articles url
2. go to headers and add content type application/json, go to body and add raw data

{
    "article_id" : "4",
    "title" : "update test",
    "body" : "updated test body"
}


Documentation
=============


https://laravel.com/docs/7.x/eloquent-resources
