/**  
    @file raum.model.js
 * 
    * @author Murielle Kamdem
    * @date 19.05.2025
    * @module model/raum
    * @description Enthält SQL-Logik zum Abrufen einzelner oder aller Raeume und
    * alle Raeume in einem Gebaeude.
    */
const db = require('../services(DB)/DB_connection');

// Alle Raeume abrufen
exports.getAllRaeume = (callback) => {
    const sql = 'SELECT * FROM raum';
    db.query(sql, callback);
};

// Einzelnen Raum abrufen
exports.getRaumById = (id, callback) => {
    const sql = 'SELECT * FROM raum WHERE idRaum = ?';
    db.query(sql, [id], callback);
};

//Alle Raeume eines Gebaeudes abrufen
exports.getRaeumeByGebaeudeId = (idGebaeude, callback) => {
    const sql = 'SELECT * FROM raum WHERE Gebaeude_idGebaeude = ?';
    db.query(sql, [idGebaeude], callback);
};