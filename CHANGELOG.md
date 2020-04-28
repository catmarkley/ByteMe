<a name="v0.2"></a>
## [0.2]

v0.2 includes a refactor of our code into component architecture and an added build system with gulpjs.

## Bug Fixes

* Fixed logo bug with gulp file

## Contributors

Skylar Adams, Emma Brady, Chandler Crane, Catherine Markley

## Features

* Added styling
* Added ingredients and recipe services to get data with http request.
* Ingredients of recipes outputted with color to show what we have and what we need for a specific recipe.
* Search functionality based on a single ingredient
* Persistent pantry functionality


<a name="v0.3"></a>
## [0.3]

v0.3 includes a refactor of architecture to have a backend folder supported by node and an express server and frontend folder with gulpjs. Our services are now supplied through a database. Implemented a third party API (sendgrid through Twilio)


## Contributors

Skylar Adams, Emma Brady, Chandler Crane, Catherine Markley

## Features

* Added styling
* Added services through database calls (Created models: food, ingredient, user, pantry, recipe)
* Implemented an express server
* REST calls (POST call to send email with grocery list)
* More information on recipe ingredients page (amount and units of ingredients)
