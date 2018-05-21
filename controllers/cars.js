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
        this.router.put('/:id', this.putCars.bind(this));
        this.router.delete('/:id', this.deleteCars.bind(this));
    }

    getCars(req, res) {
        CarsService.getCars((cars) => {
            res.json(cars);
        });
    }

    getSingleCar(req, res) {
        let id = req.params.id;
        CarsService.getSingleCar(id, (car) => {
            if (!car) {
                res.sendStatus(404);
            } else {
                res.json(car);
            }
        });
    }

    postCars(req, res) {
        let carInfo = req.body;

        CarsService.addCar(carInfo, (result) => {
            if (result) {
                res.setHeader('Location', '/cars/' + carInfo.id);
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });
    };

    putCars(req, res) {
        let id = req.params.id;
        CarsService.getSingleCar(id, (existingCar) => {
            if (!existingCar) {
                let carInfo = req.body;
                carInfo.id = id;
                CarsService.addCar(carInfo, (result) => {
                    if (result) {
                        res.setHeader('Location', '/cars/' + carInfo.id);
                        res.sendStatus(201);
                    } else {
                        res.sendStatus(500);
                    }
                });
            } else {
                CarsService.updateCar(id, req.body, (result) => {
                  if (result) {
                      res.sendStatus(204);

                  } else {
                      res.sendStatus(404);
                  }
                });
            }
        });
    }

    deleteCars(req, res) {
        let id = req.params.id;
        CarsService.deleteCars(id, (result) => {
            res.send(result);
        });
    }
}

module.exports = CarsController;