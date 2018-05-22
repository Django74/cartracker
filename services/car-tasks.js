let db = require('../db');

class CarTasksService {
    getCarTasks(callback) {
        let sql = "SELECT * FROM carCarTasks";
        db.query(sql, (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    /**
     * Get all carCarTasks that apply to that type of car
     * @param type - type of car
     * @param callback - function to execute
     */
    getCarTasksByType(type, callback) {
        let sql = "SELECT a.* FROM carCarTasks AS a INNER JOIN `carCarTask-rules` AS b on a.Name=b.Name AND b.Type=?";
        db.query(sql, [type], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    addCarTask(carCarTaskInfo, callback) {
        let sql = `INSERT INTO carCarTasks
                    (name)
                    VALUES (?)`;
        db.query(sql, [carCarTaskInfo.name], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    };

    deleteCarTasks(id, callback) {
        let sql = "DELETE FROM carCarTasks WHERE id = ?";
        db.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }
}

module.exports = new CarTasksService();