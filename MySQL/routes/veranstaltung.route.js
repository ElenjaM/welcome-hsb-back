/**
 * @file veranstaltung.routes.js
 * @description Definiert die Routen für die Veranstaltung-API (z. B. Anlegen, Aktualisieren, Löschen).
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module routes/veranstaltung
 */

const express = require('express');
const router = express.Router();
const veranstaltungController = require('../controllers/veranstaltung.controller');

router.post('/', veranstaltungController.createVeranstaltung);
router.get('/', veranstaltungController.getAllVeranstaltungen);
router.get('/:id', veranstaltungController.getVeranstaltungById);
router.put('/:id', veranstaltungController.updateVeranstaltung);
router.delete('/:id', veranstaltungController.deleteVeranstaltung);

module.exports = router;