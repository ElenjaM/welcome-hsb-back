require('dotenv').config();
const express = require('express');
const connectMongo = require('./db-mongo');
const routes = require('./app'); // Nur EINMAL einbinden

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// MongoDB verbinden und Server starten
connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });

  // Routen initialisieren, nachdem DB verbunden ist
  routes(app);
});

module.exports=app;