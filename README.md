Cartracker.js
---------------------------
This is a Car maintenance REST API done in Node.js using Express.js with MySQL Database.
It is RESTful and can be extended in various ways. It is modular and services can be swapped out.

/cars
---------------------------
GET 	/cars/ 												List all cars/

GET 	/cars/:id											List Single car BY ID

POST 	/cars/ 		  {make, type, year, model, mileage} 		Creates a car with details of the payload

PUT 	/cars/:id 	   {make, type, year, model, mileage}		Updates car at that ID with all the payload

DELETE 	/cars/:id		Deletes car at that ID

/tasks
------------------------------
GET 	/tasks/												Gets all tasks available (preset in DB)

GET 	/task/:type											Gets all task that apply to a certain car type (no oil change for Electric cars)

/cars:carID/tasks
------------------------------
GET		/cars/:carID/tasks/									Gets all tasks for a single car

POST	/cars/:carID/task	{taskID}						Creates a single task for a single car

DELETE  /cars/:carID/task/:id								Deletes single task for single car
