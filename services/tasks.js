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

    /**
     * Get all tasks that apply to that type of car
     * @param type - type of car
     * @param callback - function to execute
     */
    getTasksByType(type, callback) {
        let sql = "SELECT a.* FROM tasks AS a INNER JOIN `task-rules` AS b on a.Name=b.Name AND b.Type=?";
        db.query(sql, [type], (err, results) => {
            if (err) {
                throw err;
            } else {
                callback(results);
            }
        });
    }

    addTask(taskInfo, callback) {
        let sql = `INSERT INTO tasks
                    (name)
                    VALUES (?)`;
        db.query(sql, [taskInfo.name], (err, results) => {
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