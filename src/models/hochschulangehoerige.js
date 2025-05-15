/**
 * @file hochschulangehoerige.js
 * @description Mongoose‑Modell für die Collection **„hochschulangehoerige“** in MongoDB.
 *              Über dieses Modell können andere Teile der Anwendung Datensätze lesen, anlegen
 *              oder ändern. Das Schema ist bewusst leer (`{ strict: false }`), damit alle
 *              vorhandenen Felder aus der bestehenden Datenbank akzeptiert werden.
 *
 * @author Kevin Jancen
 * @date 15.05.2025
 */

const mongoose = require('mongoose');

/** 
 * Leeres Schema – alle Felder sind erlaubt.
 * Vorteilhaft, wenn die Dokumente bisher keine feste Struktur haben
 * (z. B. nach einer Migration aus einer relationalen Datenbank).
 */
const hochschulangehoerigeSchema = new mongoose.Schema({}, { strict: false });

/**
 * Modell für die Collection „hochschulangehoerige“.
 * Mongoose nutzt den hier angegebenen Namen exakt (kein automatisches Plural‑s),
 * weil er bereits im Plural steht.
 */
const HochschulangehoerigeModel = mongoose.model(
  'hochschulangehoerige',
  hochschulangehoerigeSchema
);

/**
 * Exportiert das Modell, damit andere Dateien es importieren können, z. B.:
 * ```js
 * const Hochschulangehoerige = require('./models/hochschulangehoerige');
 * Hochschulangehoerige.find().then(...);
 * ```
 */
module.exports = HochschulangehoerigeModel;