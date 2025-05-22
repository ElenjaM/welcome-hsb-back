/**
 * @file gebaeude.controller.js
 * @description Verarbeitet Gebäude-Routen durch Anbindung ans Modell.
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module controller/gebaeude
 */

const Gebaeude = require('../models/gebaeude.model');

// Alle Gebäude
exports.getAllGebaeude = (req, res) => {
    Gebaeude.getAllGebaeude((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        res.json(results);
    });
};

// Einzelnes Gebäude
exports.getGebaeudeById = (req, res) => {
    const { id } = req.params;
    Gebaeude.getGebaeudeById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'Gebäude nicht gefunden' });
        res.json(results[0]);
    });
};