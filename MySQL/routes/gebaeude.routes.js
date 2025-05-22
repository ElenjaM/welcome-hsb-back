/**
 * @file gebaeude.routes.js
 * @description Definiert die Routen für den Zugriff auf Gebäudeinformationen.
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module routes/gebaeude
 */

const express = require('express');
const router = express.Router();
const gebaeudeController = require('../controllers/gebaeude.controller');

router.get('/', gebaeudeController.getAllGebaeude);
router.get('/:id', gebaeudeController.getGebaeudeById);

module.exports = router;