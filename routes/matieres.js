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

module.exports = { getMatieres, getMatiere};
