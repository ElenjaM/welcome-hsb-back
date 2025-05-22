/**  
    @file raumnutzung.model.js
 *  *@description Enthält SQL-Logik zum Abrufen aller Raumnutzungen (wer nutzt welche:r Ra(e)um:e)
    *             die Personen, die einen bestimmten Raum nutzen und
    *              die Raeume, die von einer bestimmten Person genutzt werden .

    * @author Murielle Kamdem
    * @date 20.05.2025
    * @module model/raumnutzung
 */

const db = require('../services(DB)/DB_connection');

// Alle Raumnutzungen abrufen (wer nutzt welche:r Ra(e)um:e)

exports.getAllRaumnutzungen = (callback) => {
    const sql = 'SELECT * FROM raumnutzung';
    db.query(sql, callback);
};

// Personen, die einen bestimmten Raum nutzen

exports.getRaumnutzungByRaumId = (idRaum, callback) => {
    const sql = 'SELECT * FROM raumnutzung WHERE Raum_ID = ?';
    db.query(sql, [idRaum], callback);
};

//Raum, der von einer bestimmten Person genutzt wird

exports.getRaumnutzungByHochschulangehoerigeId = (idHochschulangehoerige, callback) => {
    const sql = 'SELECT * FROM raumnutzung WHERE Hochschulangehoerige_ID= ?';
    db.query(sql, [idHochschulangehoerige], callback);
};
