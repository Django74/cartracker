let db = require('../db');

class CarsService {
    getCars() {
        let sql = "SELECT * from cars";
        db.query(sql, (err, results) => {
           if (err) throw err;
           return results;
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