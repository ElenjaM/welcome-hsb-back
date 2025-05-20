/**
 * @file raum.controller.js
 * @description Verarbeitet Raeme-Routen durch Anbindung ans Model.
 * 
 * @author Murielle Kamdem
 * @date 19.05.2025
 * @module controller/raum
 */

const Raum = require('../models/raum.model');

// Alle Raeume
exports.getAllRaeume = (req, res) => {
    Raum.getAllRaeume((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen der Raeume' });
        res.json(results);
    });
}; 


// Einzelner Raum
exports.getRaumById = (req, res) => {
    const id = req.params.id;
    Raum.getRaumById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen des Raumes' });
        if (results.length === 0) return res.status(404).json({ error: 'Raum nicht gefunden' });
        res.json(results[0]);
    });
};

// Alle Raeume eines Gebaeudes
exports.getRaeumeByGebaeudeId = (req, res) => {
    const idGebaeude = req.params.idGebaeude;
    Raum.getRaeumeByGebaeudeId(idGebaeude, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen der Raeume' });
        if (results.length === 0) return res.status(404).json({ error: 'Keine Raeume gefunden' });
        res.json(results);
    });
};