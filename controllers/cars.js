let CarsService = require('../services/cars');

class CarsController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getCars.bind(this));
        this.router.get('/:id', this.getSingleCar.bind(this));
        this.router.post('/', this.postCars.bind(this));
        this.router.put('/id', this.putCars.bind(this));
        this.router.delete('/id', this.deleteCars.bind(this));
    }

    getCars(req, res) {
        CarsService.getCars((result) => {
            res.json(result);
        });
    }

    getSingleCar(req, res) {
        let id = req.params.id;
        let car = CarsService.getSingleCar(id);

        if (!car) {
            res.sendStatus(404);
        } else {
            res.send(car);
        }
    }

    postCars(req, res) {
        let carInfo = req.body;

        if (CarsService.addCar(carInfo)) {
            res.setHeader('Location', '/cars/' + carInfo.id);
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    };

    putCars(req, res) {
        let id = req.params.id;
        let existingCar = CarsService.getSingleCar(id);

        if (!existingCar) {
            let carInfo = req.body;
            carInfo.id = id;
            if (CarsService.addCar(carInfo)) {
                res.setHeader('Location', '/cars/' + id);
                res.sendStatus(201);
            } else {
                res.sendStatus(500);
            }
        } else {
            if (CarsService.updateCar(id, req.body)) {
                res.sendStatus(204);
            } else {
                res.sendStatus(404);
            }
        }
    }

    deleteCars(req, res) {
        let id = req.params.id;
        let cars = CarsService.deleteCars(id);
        res.send(cars);
    }
}

module.exports = CarsController;