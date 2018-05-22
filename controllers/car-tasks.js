let CarTasksService = require('../services/carTasks');

class CarTasksController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getCarTasks.bind(this));
        this.router.get('/:type', this.getCarTasksByType.bind(this));
        this.router.post('/', this.postCarTask.bind(this));
        this.router.delete('/:id', this.deleteCarTask.bind(this));
    }

    getCarTasks(req, res) {
        CarTasksService.getCarTasks((carTasks) => {
            res.json(carTasks);
        });
    }

    getCarTasksByType(req, res) {
        let type = req.params.type;
        CarTasksService.getCarTasksByType(type, (carTask) => {
            if (!carTask) {
                res.sendStatus(404);
            } else {
                res.json(carTask);
            }
        });
    }

    postCarTask(req, res) {
        let carTaskInfo = req.body;

        CarTasksService.addCarTask(carTaskInfo, (result) => {
            if (result) {
                res.setHeader('Location', '/carTasks/' + carTaskInfo.id);
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