let mysql = require('mysql');
let connection = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b3efec29d8ab53',
    password: '7b3a6087',
    database: 'curve-dental'
});
module.exports = connection;