/**
 * @file benutzer.routes.js
 * @description Definiert die Routen für das Benutzer-API (z. B. Login, Registrierung, Nutzerverwaltung).
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module routes/benutzer
 */

const express = require('express');
const router = express.Router();
const benutzerController = require('../controllers/benutzer.controller');

router.post('/register', benutzerController.register);
router.post('/login', benutzerController.login);
router.get('/', benutzerController.getAllBenutzer);
router.get('/:id', benutzerController.getBenutzerById);
router.put('/:id', benutzerController.updateBenutzer);
router.delete('/:id', benutzerController.deleteBenutzer);

module.exports = router;