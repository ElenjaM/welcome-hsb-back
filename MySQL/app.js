const app = require('./server');
const datenbank = require('./services(DB)/DB_connection');

// Benutzer-Routen laden
const benutzerRoutes = require('./routes/benutzer.routes');
app.use('/api/benutzer', benutzerRoutes);

// Veranstalung-Routen laden
const veranstaltungRoutes = require('./routes/veranstaltung.route');
app.use('/api/veranstaltung', veranstaltungRoutes);

// Gebaeude-Routen laden
const gebaeudeRoutes = require('./routes/gebaeude.routes');
app.use('/api/gebaeude', gebaeudeRoutes);

// Raum-Routen laden
const raumRoutes = require('./routes/raum.routes');
app.use('/api/raum', raumRoutes);

// Hochschulangehoerige-Routen laden
const hochschulangehoerigeRoutes = require('./routes/hochschulangehoerige.routes');
app.use('/api/hochschulangehoerige', hochschulangehoerigeRoutes);

//organisationsbereich-Routen laden
const organisationsbereichRoutes = require('./routes/organisationsbereich.routes');
app.use('/api/organisationsbereich', organisationsbereichRoutes);

// Raumnutzung-Routen laden
const raumnutzungRoutes = require('./routes/raumnutzung.routes');
app.use('/api/raumnutzung', raumnutzungRoutes);


app.get('/hochschulangehoerige', (req,res) =>{
   
    datenbank.query('SELECT * FROM hochschulangehoerige', (err,result) =>{
        if (err){
            res.json("Error");
        }
            res.json(result);
    })
         
    });

    //neue hochschulangehoerige hinzufügen
const new_hochschulangehoerige = { name: "Uta Bonhebeck", email: "uta.bonhebeck@hs-bremen.de", Organisationsbereich_idOrganisationsbereich:8};
/*app.post('/hochschulangehoerige',(req,res)=>{

    datenbank.query('INSERT INTO hochschulangehoerige SET ?', new_hochschulangehoerige, (err, result)=>{
        if (err) {
         res.json("Error in Eingabe");
        }
        res.json("Frau Prof Uta erfolgreich hinzugefügt mit ID: ", result);
    })
});*/

//der Hochschulangehoerige von Id 23 entfernen
/*app.delete('/hochschulangehoerige',(req,res)=>{
    datenbank.query('DELETE FROM hochschulangehoerige WHERE idHochschulangehoerige=23',(err, result)=>{
        if (err){
            res.json("Error");
        }
            res.json("erfolgreich entfern: ", result);
    })
});*/


     