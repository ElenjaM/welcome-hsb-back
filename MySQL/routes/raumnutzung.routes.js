/**
 * @file raumnutzung.routes.js
 * @description Definiert die Routen für den Zugriff auf Raumnutzung-Daten.
 * 
 * @author Murielle Kamdem
 * @date 20.05.2025
 * @module routes/raumnutzung
 */

const express = require('express');
const router = express.Router();
const raumnutzungController = require('../controllers/raumnutzung.controller');

// Alle Raumnutzungen abrufen (wer nutzt welche:r Ra(e)um:e)

router.get('/', raumnutzungController.getAllRaumnutzungen);

// Personen, die einen bestimmten Raum nutzen	

router.get('/raum/:idRaum', raumnutzungController.getRaumnutzungByRaumId);

// Raum, der von einer bestimmten Person genutzt wird

router.get('/hochschulangehoerige/:idHochschulangehoerige', raumnutzungController.getRaumnutzungByHochschulangehoerigeId);

// Exportiere die Router-Instanz
module.exports = router;