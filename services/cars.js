let db = require('../db');

class CarsService {
    getCars() {
        let sql = "SELECT * from cars";
        return db.query(sql, (err, results) => {
           if (err) throw err;
        });
    }

    getSingleCar(id) {
    }

    postCars() {
    };

    putCars() {
    }

    deleteCars(id) {
    }
}

module.exports = new CarsService();