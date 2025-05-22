/**
 * @file veranstaltung.model.js
 * @description Stellt Datenbankabfragen für das Veranstaltung-Modul bereit (CRUD-Operationen).
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module model/veranstaltung
 */

const db = require('../services(DB)/DB_connection');

// Veranstaltung anlegen
exports.createVeranstaltung = (data, callback) => {
    const sql = `
        INSERT INTO veranstaltung 
        (Titel, Beschreibung, Datum, Startzeit, Endezeit, Raum_idRaum, Topic, URL, Ort, Benutzer_idBenutzer)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        data.Titel,
        data.Beschreibung,
        data.Datum,
        data.Startzeit,
        data.Endezeit,
        data.Raum_idRaum,
        data.Topic,
        data.URL,
        data.Ort,
        data.Benutzer_idBenutzer
    ];
    db.query(sql, values, callback);
};

// Alle Veranstaltungen abrufen
exports.getAllVeranstaltungen = (callback) => {
    const sql = 'SELECT * FROM veranstaltung';
    db.query(sql, callback);
};

// Einzelne Veranstaltung
exports.getVeranstaltungById = (id, callback) => {
    const sql = 'SELECT * FROM veranstaltung WHERE idVeranstaltung = ?';
    db.query(sql, [id], callback);
};

// Veranstaltung aktualisieren
exports.updateVeranstaltung = (id, data, callback) => {
    const sql = `
        UPDATE veranstaltung SET 
        Titel = ?, Beschreibung = ?, Datum = ?, Startzeit = ?, Endezeit = ?, 
        Raum_idRaum = ?, Topic = ?, URL = ?, Ort = ?, Benutzer_idBenutzer = ?
        WHERE idVeranstaltung = ?`;
    const values = [
        data.Titel,
        data.Beschreibung,
        data.Datum,
        data.Startzeit,
        data.Endezeit,
        data.Raum_idRaum,
        data.Topic,
        data.URL,
        data.Ort,
        data.Benutzer_idBenutzer,
        id
    ];
    db.query(sql, values, callback);
};

// Veranstaltung löschen
exports.deleteVeranstaltung = (id, callback) => {
    const sql = 'DELETE FROM veranstaltung WHERE idVeranstaltung = ?';
    db.query(sql, [id], callback);
};