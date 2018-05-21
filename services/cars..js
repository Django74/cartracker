let db = require('../db');

class CarsService {
    getCars() {
        let sql = "Select * from task";
        return db.query(sql, (err, results) => {
           if (err) throw err;
        });
    }

    getSingleCar() {
    }

    postCars() {
    };

    putCars() {
    }

    deleteCars() {
    }
}

module.exports = new CarsService();