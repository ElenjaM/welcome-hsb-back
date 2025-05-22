/**  
    @file hochschulangehoerige.model.js
 * 
    * @author Murielle Kamdem
    * @date 20.05.2025
    * @module model/hochschulangehoerige
    * @description Enthält SQL-Logik zum Abrufen einzelner oder aller Hochschulangehoerigen 
    *             und die, die zu einem bestimmten Organisationsbereich gehören.
    */

const db = require('../services(DB)/DB_connection'); 

// Alle Hochschulangehoerigen abrufen

exports.getAllHochschulangehoerige = (callback) => {
    const sql = 'SELECT * FROM hochschulangehoerige';
    db.query(sql, callback);
};

// Einzelnen Hochschulangehoerigen abrufen

exports.getHochschulangehoerigeById = (id, callback) => {
    const sql = 'SELECT * FROM hochschulangehoerige WHERE idHochschulangehoerige = ?';
    db.query(sql, [id], callback);
};

// Alle Hochschulangehoerigen eines Organisationsbereichs abrufen

exports.getHochschulangehoerigeByOrganisationsbereichId = (idOrganisationsbereich, callback) => {
    const sql = 'SELECT * FROM hochschulangehoerige WHERE Organisationsbereich_idOrganisationsbereich = ?';
    db.query(sql, [idOrganisationsbereich], callback);
};