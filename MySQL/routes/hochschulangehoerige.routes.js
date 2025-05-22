/**
 * @file hochschulangehoerige.routes.js
 * @description Definiert die Routen für den Zugriff auf Hochschulangehoerige-Daten.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module routes/hochschulangehoerige
 */

const express = require('express');
const router = express.Router();
const hochschulangehoerigeController = require('../controllers/hochschulangehoerige.controller');

// Alle Hochschulangehoerige abrufen

router.get('/', hochschulangehoerigeController.getAllHochschulangehoerige);

// Einzelnen Hochschulangehoerigen abrufen

router.get('/:id', hochschulangehoerigeController.getHochschulangehoerigeById);

// Alle Hochschulangehoerige eines Organisationsbereichs abrufen

router.get('/organisationsbereich/:idOrganisationsbereich', hochschulangehoerigeController.getHochschulangehoerigeByOrganisationsbereichId);

// Exportiere die Router-Instanz
module.exports = router;

