let CarsService = require('../services/cars');

class CarsController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getCars.bind(this));
        this.router.get('/:id', this.getSingleCar.bind(this));
        this.router.post('/', this.postCar.bind(this));
        this.router.put('/:id', this.putCar.bind(this));
        this.router.delete('/:id', this.deleteCar.bind(this));
    }

    getCars(req, res) {
        CarsService.getCars((cars) => {
          if (!cars) {
            res.sendStatus(404);
          } else {
            res.json(cars);
          }
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

    postCar(req, res) {
        let carInfo = req.body;

        CarsService.addCar(carInfo, (result) => {
            if (result) {
                res.setHeader('Location', '/cars/' + carInfo.id);
                res.sendStatus(201);
            } else {
                res.sendStatus(500);
            }
        });
    };

    putCar(req, res) {
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

    deleteCar(req, res) {
        let id = req.params.id;
        CarsService.deleteCar(id, (result) => {
            res.send(result);
        });
    }
}

module.exports = CarsController;