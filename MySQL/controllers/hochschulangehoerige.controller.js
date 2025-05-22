/**
 * @file hochschulangehoerige.controller.js
 * @description Verarbeitet hochschulangehoerige-Routen durch Anbindung ans Model.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module controller/hochschulangehoerige
 */

const Hochschulangehoerige = require('../models/hochschulangehoerige.model');

// Alle Hochschulangehoerige

exports.getAllHochschulangehoerige = (req, res) => {
    Hochschulangehoerige.getAllHochschulangehoerige((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen der Hochschulangehoerigen' });
        res.json(results);
    });
};

// Einzelner Hochschulangehoeriger

exports.getHochschulangehoerigeById = (req, res) => {
    const id = req.params.id;
    Hochschulangehoerige.getHochschulangehoerigeById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'keine Hochschulangehoerigen gefunden' });
        res.json(results[0]);
    });
};

// Alle Hochschulangehoerige eines Organisationsbereichs

exports.getHochschulangehoerigeByOrganisationsbereichId = (req, res) => {
    const idOrganisationsbereich = req.params.idOrganisationsbereich;
    Hochschulangehoerige.getHochschulangehoerigeByOrganisationsbereichId(idOrganisationsbereich, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'Keine Hochschulangehoerigen gefunden' });
        res.json(results);
    });
};