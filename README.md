Cartracker.js
---------------------------
This is a Car maintenance REST API done in Node.js using Express.js with MySQL Database.
It is RESTful and can be extended in various ways. I left out various, unneeded endpoints but it be easily added back. It is modular and services can be swapped out.

/cars
---------------------------
GET 	/cars/ 												List all cars

GET 	/cars/:id											List Single car BY ID

POST 	/cars/ 		  {make, type, year, model, mileage} 		Creates a car with details of the payload

PUT 	/cars/:id 	   {make, type, year, model, mileage}		Updates car at that ID with all the payload

DELETE 	/cars/:id		Deletes car at that ID

/tasks
------------------------------
GET 	/tasks/												Gets all tasks available (preset in DB)

GET 	/tasks/:type											Gets all task that apply to a certain car type (no oil change for Electric cars)

/cars/:carID/tasks
------------------------------
GET		/cars/:carID/tasks/									Gets all tasks for a single car

POST	/cars/:carID/tasks	{taskID}						Creates a single task for a single car

DELETE  /cars/:carID/tasks/:id								Deletes single task for single car
