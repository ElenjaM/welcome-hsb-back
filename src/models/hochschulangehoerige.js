const mongoose = require('mongoose');

const hochschulangehoerigeSchema = new mongoose.Schema({}, { strict: false }); // flexible Struktur

module.exports = mongoose.model('hochschulangehoerige', hochschulangehoerigeSchema);