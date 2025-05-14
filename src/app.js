const app=require('./server');
const datenbank=require('./services(DB)/DB_connection')


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


     