let db = require('../db');

class TasksService {
    getTasks(callback) {
        let sql = "SELECT * FROM tasks";
        db.query(sql, (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    getSingleTask(id, callback) {
        let sql = "SELECT * FROM tasks WHERE id=?";
        db.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    addTask(taskInfo, callback) {
        let sql = `INSERT INTO tasks
                    (make, model, year, type, mileage)
                    VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [taskInfo.make, taskInfo.model, taskInfo.year, taskInfo.type, taskInfo.mileage], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    };

    deleteTasks(id, callback) {
        let sql = "DELETE FROM tasks WHERE id = ?";
        db.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }
}

module.exports = new TasksService();