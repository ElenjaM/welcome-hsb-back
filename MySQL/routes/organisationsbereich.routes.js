/**
 * @file organisationsbereich.routes.js
 * @description Definiert die Routen für den Zugriff auf Organisationsbereich-Daten.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module routes/organisationsbereich
 */

const express = require('express');
const router = express.Router();
const organisationsbereichController = require('../controllers/organisationsbereich.controller');

// Alle Organisationsbereiche abrufen

router.get('/', organisationsbereichController.getAllOrganisationsbereiche);

// Einzelnen Organisationsbereich abrufen

router.get('/:id', organisationsbereichController.getOrganisationsbereichById);

// Exportiere die Router-Instanz
module.exports = router;

