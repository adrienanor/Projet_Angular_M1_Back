let Utilisateur = require('../model/utilisateur');
const Matieres = require("../model/matiere");

// Récupérer tous les assignments (GET)
function getUtilisateurs(req, res){
    Utilisateur.find({isAdmin: false}, (err, utilisateurs) => {
        if(err){
            res.send(err)
        }

        res.send(utilisateurs);
    });
}


function getUtilisateur(req, res){
    let paramsNomUtil = req.params.nomUtil;
    let paramsMdp = req.params.mdp;

    let query = {nomUtil : paramsNomUtil, mdp : paramsMdp}

    Utilisateur.findOne(query, (err, utilisateur) =>{
        if(err){res.send(err)}
        res.json(utilisateur);
    })

}

function postUtilisateur(req, res){
    let utilisateur = new Utilisateur();
    utilisateur.nomUtil = req.body.nomUtil;
    utilisateur.mdp = req.body.mdp;
    utilisateur.email = req.body.email;

    console.log("POST utilisateur reçu :");
    console.log(utilisateur)

    utilisateur.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${utilisateur.nomUtil} saved!`})
    })
}



module.exports = { getUtilisateurs, getUtilisateur, postUtilisateur};
