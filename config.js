//Mysql config
const sql = require('mysql');
const db  = sql.createConnection({
    host: 'localhost',
    port: 3000,// 8889 for mac, 3000 for windows
    user: 'root',
    password: '',// leave blank for windows, "root" for mac
    database: 'database goes here' // link db here
});

//connecting to db
db.connect(()=>{ 
    console.log('Mysql connected.');
});

module.exports = config;