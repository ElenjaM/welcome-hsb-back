const mysql = require('mysql2');

// verbindung mit DB
const datenbank= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'mySQLBDD29&.',
    database: 'welcome@hsb',
});

datenbank.connect((err) =>{
    if (err) {
    console.error("Fehler bei der Verbindung mit DB: ", err);
    return;
    }
    console.log('Mit der Datenbank verbunden!');
}); 

module.exports=datenbank;
