let db = require('../db');

class CarsService {
    getCars(callback) {
        let sql = "SELECT * from cars";
        db.query(sql, (err, results) => {
           if (err) {
               throw err;
           } else {
               callback(results);
           }
        });
    }

    getSingleCar(id) {
    }

    addCar(carInfo) {
    };

    updateCar(id, carInfo) {
    }

    deleteCars(id) {
    }
}

module.exports = new CarsService();