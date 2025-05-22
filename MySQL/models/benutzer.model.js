/**
 * @file benutzer.model.js
 * @description Stellt Datenbankabfragen für das Benutzer-Modul bereit (CRUD-Operationen).
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module model/benutzer
 */

const db = require('../services(DB)/DB_connection');

// Benutzer anlegen
exports.createBenutzer = (Benutzername, Password_hash, Rolle, callback) => {
    const sql = 'INSERT INTO benutzer (Benutzername, Password_hash, Rolle) VALUES (?, ?, ?)';
    db.query(sql, [Benutzername, Password_hash, Rolle], callback);
};

// Benutzer nach Name suchen (für Login)
exports.findBenutzerByName = (Benutzername, callback) => {
    const sql = 'SELECT * FROM benutzer WHERE Benutzername = ?';
    db.query(sql, [Benutzername], callback);
};

// Alle Benutzer abrufen
exports.getAllBenutzer = (callback) => {
    const sql = 'SELECT idBenutzer, Benutzername, Rolle FROM benutzer';
    db.query(sql, callback);
};

// Einzelner Benutzer
exports.getBenutzerById = (id, callback) => {
    const sql = 'SELECT idBenutzer, Benutzername, Rolle FROM benutzer WHERE idBenutzer = ?';
    db.query(sql, [id], callback);
};

// Benutzer bearbeiten
exports.updateBenutzer = (id, Benutzername, Rolle, Password_hash, callback) => {
    let sql;
    let params;

    if (Password_hash) {
        // Passwort wird mitgeupdated
        sql = 'UPDATE benutzer SET Benutzername = ?, Rolle = ?, Password_hash = ? WHERE idBenutzer = ?';
        params = [Benutzername, Rolle, Password_hash, id];
    } else {
        // Passwort bleibt unverändert
        sql = 'UPDATE benutzer SET Benutzername = ?, Rolle = ? WHERE idBenutzer = ?';
        params = [Benutzername, Rolle, id];
    }

    db.query(sql, params, callback);
};

// Benutzer löschen
exports.deleteBenutzer = (id, callback) => {
    const sql = 'DELETE FROM benutzer WHERE idBenutzer = ?';
    db.query(sql, [id], callback);
};