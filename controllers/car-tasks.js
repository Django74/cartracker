let CarTasksService = require('../services/car-tasks');

class CarTasksController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getCarTasks.bind(this));
        this.router.post('/', this.postCarTask.bind(this));
        this.router.delete('/:id', this.deleteCarTask.bind(this));
    }

    getCarTasks(req, res) {
        let carID = req.params.carID;
        console.log(`car id is ${carID}`);
        CarTasksService.getCarTasks(carID, (carTasks) => {
            res.json(carTasks);
        });
    }

    postCarTask(req, res) {
        let carID = req.params.carID;
        let taskID = req.body.taskID;
        CarTasksService.addCarTask(carID, taskID, (result) => {
            if (result) {
                res.setHeader('Location', '/car-tasks/' + taskID);
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });
    };

    deleteCarTask(req, res) {
        let id = req.params.id;
        CarTasksService.deleteCarTasks(id, (result) => {
            res.send(result);
        });
    }
}

module.exports = CarTasksController;