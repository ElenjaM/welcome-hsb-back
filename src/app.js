/**
 * @file app.js
 * @description Definiert die Routen für den Zugriff auf die MongoDB-Daten (z. B. Hochschulangehörige).
 *              Wird nach erfolgreicher Verbindung zur Datenbank vom Server eingebunden.
 * 
 * @author Kevin Jancen
 * @date 15.05.2025
 * @module app
 */

const Hochschulangehoerige = require('./models/hochschulangehoerige');

/**
 * Initialisiert die API-Routen für die Express-Anwendung.
 * 
 * @param {import('express').Express} app - Die Express-Anwendung
 */
module.exports = (app) => {
  /**
   * Route: GET /hochschulangehoerige
   * 
   * Beschreibung:
   * Ruft alle Hochschulangehörigen aus der MongoDB-Datenbank ab
   * und gibt sie als JSON im Browser zurück. Die Daten werden zusätzlich im Terminal ausgegeben.
   * 
   * Beispielaufruf: GET http://localhost:5000/hochschulangehoerige
   */
  app.get('/hochschulangehoerige', async (req, res) => {
    try {
      const daten = await Hochschulangehoerige.find(); // Alle Einträge der Collection holen
      console.log('Hochschulangehörige aus MongoDB:', daten); 
      res.json(daten); // Als JSON an den Client zurückgeben
    } catch (err) {
      console.error('Fehler beim Abrufen:', err);
      res.status(500).send('Fehler beim Abrufen der Daten');
    }
  });
};