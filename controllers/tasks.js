let TasksService = require('../services/tasks');

class TasksController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getTasks.bind(this));
        this.router.get('/:type', this.getTasksByType.bind(this));
    }

    getTasks(req, res) {
        TasksService.getTasks((tasks) => {
            res.json(tasks);
        });
    }

    getTasksByType(req, res) {
        let type = req.params.type;
        TasksService.getTasksByType(type, (task) => {
            if (!task) {
                res.sendStatus(404);
            } else {
                res.json(task);
            }
        });
    }
}

module.exports = TasksController;