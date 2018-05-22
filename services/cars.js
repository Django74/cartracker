let db = require('../db');

class CarsService {
    getCars(callback) {
        let sql = "SELECT * FROM cars";
        db.query(sql, (err, results) => {
           if (err) {
               throw err;
           } else {
               callback(results);
           }
        });
    }

    getSingleCar(id, callback) {
        let sql = "SELECT * FROM cars WHERE id=?";
        db.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    addCar(carInfo, callback) {
        let sql = `INSERT INTO cars
                    (Make, Model, Year, Type, Mileage)
                    VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [carInfo['make'], carInfo['model'], carInfo['year'], carInfo['type'], carInfo['mileage']], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    };

    updateCar(id, carInfo, callback) {
        let sql = `UPDATE cars
                    SET Make=?,
                        Model=?,
                        Year=?,
                        Type=?,
                        Mileage=?
                    WHERE id = ?`;
        db.query(sql, [carInfo.make, carInfo.model, carInfo.year, carInfo.type, carInfo.mileage, id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    deleteCar(id, callback) {
        let sql = "DELETE FROM cars WHERE id = ?";
        db.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }
}

module.exports = new CarsService();