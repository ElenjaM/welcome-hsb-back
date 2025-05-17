/**
 * @file veranstaltung.controller.js
 * @description Verarbeitet API-Anfragen zur Erstellung, Anzeige, Bearbeitung und Löschung von Veranstaltungen.
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module controller/veranstaltung
 */

const Veranstaltung = require('../models/veranstaltung.model');

// Anlegen
exports.createVeranstaltung = (req, res) => {
    Veranstaltung.createVeranstaltung(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Anlegen', details: err });
        res.status(201).json({ message: 'Veranstaltung erstellt', id: result.insertId });
    });
};

// Alle abrufen
exports.getAllVeranstaltungen = (req, res) => {
    Veranstaltung.getAllVeranstaltungen((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        res.json(results);
    });
};

// Einzelne abrufen
exports.getVeranstaltungById = (req, res) => {
    const { id } = req.params;
    Veranstaltung.getVeranstaltungById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'Nicht gefunden' });
        res.json(results[0]);
    });
};

// Bearbeiten
exports.updateVeranstaltung = (req, res) => {
    const { id } = req.params;
    Veranstaltung.updateVeranstaltung(id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Bearbeiten' });
        res.json({ message: 'Veranstaltung aktualisiert' });
    });
};

// Löschen
exports.deleteVeranstaltung = (req, res) => {
    const { id } = req.params;
    Veranstaltung.deleteVeranstaltung(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Löschen' });
        res.json({ message: 'Veranstaltung gelöscht' });
    });
};