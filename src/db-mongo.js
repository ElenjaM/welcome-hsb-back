const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

async function connectMongo() {
  try {
    await mongoose.connect(uri);
    console.log('Mit MongoDB verbunden');
  } catch (error) {
    console.error('Fehler bei der MongoDB-Verbindung:', error);
    process.exit(1); 
  }
}

module.exports = connectMongo;