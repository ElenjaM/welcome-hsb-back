/**
 * @file organisationsbereich.controller.js
 * @description Verarbeitet organisationsbereich-Routen durch Anbindung ans Model.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module controller/organisationsbereich
 */

const Organisationsbereich = require('../models/organisationsbereich.model');

// Alle Organisationsbereiche

exports.getAllOrganisationsbereiche = (req, res) => {
    Organisationsbereich.getAllOrganisationsbereiche((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen der Organisationsbereiche' });
        res.json(results);
    });
};

// Einzelner Organisationsbereich

exports.getOrganisationsbereichById = (req, res) => {
    const id = req.params.id;
    Organisationsbereich.getOrganisationsbereichById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'keine Organisationsbereiche gefunden' });
        res.json(results[0]);
    });
};