const Hochschulangehoerige = require('./models/hochschulangehoerige');

//beispielhaft
module.exports = (app) => {
  app.get('/hochschulangehoerige', async (req, res) => {
    try {
      const daten = await Hochschulangehoerige.find();
      console.log('Hochschulangehörige aus MongoDB:', daten); 
      res.send('Daten wurden im Terminal ausgegeben.');
    } catch (err) {
      console.error('Fehler beim Abrufen:', err);
      res.status(500).send('Fehler beim Abrufen der Daten');
    }
  });
};