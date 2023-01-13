let Matieres = require('../model/matiere');

// Récupérer tous les assignments (GET)
function getMatieres(req, res){
    Matieres.find((err, matieres) => {
        if(err){
            res.send(err)
        }

        res.send(matieres);
    });
}


function getMatiere(req, res){
    // let matiereNom = req.params.nom;
    //
    // let query = {nom : matiereNom}
    //
    // Matieres.findOne(query, (err, matiere) =>{
    //     if(err){res.send(err)}
    //     res.json(matiere);
    // })

    let matiereId = req.params.id;

    Matieres.findOne({id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    });
}

function postMatiere(req, res){
    let matiere = new Matieres();
    matiere.id = req.body.id;
    matiere.nom = req.body.nom;
    matiere.professeur = req.body.professeur;

    console.log("POST matiere reçu :");
    console.log(matiere)

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.nom} saved!`})
    })
}

module.exports = { getMatieres, getMatiere, postMatiere};
