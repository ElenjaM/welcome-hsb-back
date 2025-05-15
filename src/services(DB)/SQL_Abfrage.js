
const datenbank = require("./DB_connection");

    //eine Abfrage, die die Räume und das Gebäude, zu dem sie gehören, zurückgibt
   /* datenbank.query('SELECT raum.Bezeichnung, raum.Etage, raum.Typ, gebaeude.Name FROM raum INNER JOIN gebaeude ON gebaeude.idGebaeude=raum.Gebaeude_idGebaeude',(err,result,fields)  =>{
        if (err) throw err;
        console.log('Die Räume sind: ' ,result);
    })*/

    //eine Abfrage, die die hochschulangehoerige, die Andreas in ihre Namen haben, zurückgibt 
    datenbank.query('SELECT * FROM hochschulangehoerige WHERE Name LIKE "%Andreas%"',(err,result)=>{
        if (err){
            console.error("Error bei Suche von Hochschulangehoerige");
        }
            console.log("die Hochschulangehoerige mit Andreas in der Name: ", result);
    });

    //eine INSERT Anfrage (ich habe Herr Bührmann von der immatrikulationsamts hinzugefügt)
   /* const new_hochschulangehoerige = { name: "Dennis Bührmann", email: "dennis.bührmann@hs-bremen.de", Organisationsbereich_idOrganisationsbereich:3};
    datenbank.query('INSERT INTO hochschulangehoerige SET ?', new_hochschulangehoerige, (err, result)=>{
        if (err) throw err;
        console.log("Herr Bührmann erfolgreich hinzugefügt mit ID: ", result);
    });*/

    /*datenbank.end((err)=>{
        if (err) throw err;
        console.log("DB erfolgreich abgemeldet ");
    });*/
