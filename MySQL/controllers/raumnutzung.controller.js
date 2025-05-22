/**
 * @file raumnutzung.controller.js
 * @description Verarbeitet raumnutzung-Routen durch Anbindung ans Model.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module controller/raumnutzung
 */

const Raumnutzung = require('../models/raumnutzung.model');

// Alle Raumnutzungen (wer nutzt welche:r Ra(e)um:e)

exports.getAllRaumnutzungen = (req, res) => {
    Raumnutzung.getAllRaumnutzungen((error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Fehler beim Abrufen der Raumnutzungen' });
        }
        res.status(200).json(results);
    });
};

// Personen, die einen bestimmten Raum nutzen

exports.getRaumnutzungByRaumId = (req, res) => {
    const idRaum = req.params.idRaum;
    Raumnutzung.getRaumnutzungByRaumId(idRaum, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Fehler beim Abrufen der Raumnutzung' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Keine Raumnutzung gefunden' });
        }
        res.status(200).json(results);
    });
};

// Raum, der von einer bestimmten Person genutzt wird

exports.getRaumnutzungByHochschulangehoerigeId = (req, res) => {
    const idHochschulangehoerige = req.params.idHochschulangehoerige;
    Raumnutzung.getRaumnutzungByHochschulangehoerigeId(idHochschulangehoerige, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Fehler beim Abrufen der Raumnutzung' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Keine Raumnutzung gefunden' });
        }
        res.status(200).json(results);
    });
};

