/**
 * @file server.js
 * @description Startet den Express-Server und verbindet sich mit der MongoDB-Datenbank.
 *              Lädt Umgebungsvariablen, initialisiert Middleware und API-Routen.
 * 
 * @author Kevin Jancen
 * @date 15.05.2025
 * @module server
 */

require('dotenv').config(); // Lädt Umgebungsvariablen aus der .env-Datei
const express = require('express');
const connectMongo = require('./db-mongo'); // Funktion zur Verbindung mit MongoDB
const routes = require('./app'); // Routen (API-Endpunkte) importieren

const app = express();
const port = process.env.PORT || 5000; // Port aus .env oder Standard: 5000

// Middleware: JSON-Daten aus Requests verarbeiten
app.use(express.json());

/**
 * Verbindet sich mit der MongoDB und startet den Server.
 * Sobald die DB-Verbindung erfolgreich ist, werden die Routen geladen und der Server gestartet.
 */
connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });

  // Routen initialisieren
  routes(app);
});

module.exports = app;