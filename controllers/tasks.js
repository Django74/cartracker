let TasksService = require('../services/tasks');

class TasksController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getTasks.bind(this));
        this.router.get('/:type', this.getTasksByType.bind(this));
        this.router.post('/', this.postTask.bind(this));
        this.router.delete('/:id', this.deleteTask.bind(this));
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

    postTask(req, res) {
        let taskInfo = req.body;

        TasksService.addTask(taskInfo, (result) => {
            if (result) {
                res.setHeader('Location', '/tasks/' + taskInfo.id);
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });
    };

    deleteTask(req, res) {
        let id = req.params.id;
        TasksService.deleteTasks(id, (result) => {
            res.send(result);
        });
    }
}

module.exports = TasksController;