/**
 * @file db-mongo.js
 * @description Stellt die Verbindung zur MongoDB über Mongoose her.
 *              Nutzt die Verbindungs-URI aus der .env-Datei.
 * 
 * @author Kevin Jancen
 * @date 15.05.2025
 * @module db-mongo
 */

const mongoose = require('mongoose');
require('dotenv').config(); // Lädt Umgebungsvariablen aus .env

// Die MongoDB-Verbindungszeichenfolge aus der Umgebungsvariable
const uri = process.env.MONGO_URI;

/**
 * Verbindet sich mit MongoDB über Mongoose.
 * Bei einem Verbindungsfehler wird der Fehler ausgegeben und der Prozess beendet.
 * 
 * @async
 * @function connectMongo
 * @returns {Promise<void>}
 */
async function connectMongo() {
  try {
    await mongoose.connect(uri); // Verbindung zu MongoDB
    console.log('Mit MongoDB verbunden');
  } catch (error) {
    console.error('Fehler bei der MongoDB-Verbindung:', error);
    process.exit(1); // Beendet das Programm mit Fehlercode
  }
}

// Exportiert die Funktion zur Wiederverwendung in anderen Dateien
module.exports = connectMongo;