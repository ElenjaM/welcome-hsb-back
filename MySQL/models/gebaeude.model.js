/**
 * @file gebaeude.model.js
 * @description Enthält SQL-Logik zum Abrufen einzelner oder aller Gebäude.
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module model/gebaeude
 */

const db = require('../services(DB)/DB_connection');

// Alle Gebäude abrufen
exports.getAllGebaeude = (callback) => {
    const sql = 'SELECT * FROM gebaeude';
    db.query(sql, callback);
};

// Einzelnes Gebäude
exports.getGebaeudeById = (id, callback) => {
    const sql = 'SELECT * FROM gebaeude WHERE idGebaeude = ?';
    db.query(sql, [id], callback);
};