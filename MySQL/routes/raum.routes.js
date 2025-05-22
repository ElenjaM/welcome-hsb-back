/** 
* @file raum.routes.js 
* @description Definiert die Routen für den Zugriff auf Raum-Daten.
*   
* @author Murielle Kamdem
* @date 19.05.2025
* @module routes/raum
*/

const express = require('express');
const router = express.Router();
const raumController = require('../controllers/raum.controller');

// Alle Raeume abrufen
router.get('/', raumController.getAllRaeume);

// Einzelnen Raum abrufen
router.get('/:id', raumController.getRaumById);

// Alle Raeume eines Gebaeudes abrufen
router.get('/gebaeude/:idGebaeude', raumController.getRaeumeByGebaeudeId);

// Exportiere die Router-Instanz
module.exports = router;