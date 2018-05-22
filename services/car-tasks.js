let db = require('../db');

class CarTasksService {
    getCarTasks(carID, callback) {
        let sql = "SELECT a.* FROM tasks AS a INNER JOIN `car-tasks` AS b on a.id=b.TaskID AND b.CarID=?";
        db.query(sql, [carID], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    addCarTask(carID, taskID, callback) {
        let sql = "INSERT INTO `car-tasks`(CarID, TaskID) VALUES (?, ?)";
        db.query(sql, [carID, taskID], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    };

    deleteCarTasks(carID, callback) {
        let sql = "DELETE FROM `car-tasks` WHERE CarID=?";
        db.query(sql, [carID], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }
}

module.exports = new CarTasksService();