/**  
    @file organisationsbereich.model.js
 *  *@description Enthält SQL-Logik zum Abrufen einzelner oder aller Organisationsbereiche

    * @author Murielle Kamdem
    * @date 20.05.2025
    * @module model/organisationsbereich
    
    */

const db = require('../services(DB)/DB_connection');

// Alle Organisationsbereiche abrufen

exports.getAllOrganisationsbereiche = (callback) => {
    const sql = 'SELECT * FROM organisationsbereich';
    db.query(sql, callback);
};

// Einzelnen Organisationsbereich abrufen

exports.getOrganisationsbereichById = (id, callback) => {
    const sql = 'SELECT * FROM organisationsbereich WHERE idOrganisationsbereich = ?';
    db.query(sql, [id], callback);
};

