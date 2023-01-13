let Utilisateur = require('../model/utilisateur');

// Récupérer tous les assignments (GET)
function getUtilisateurs(req, res){
    Utilisateur.find((err, utilisateurs) => {
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




module.exports = { getUtilisateurs, getUtilisateur};
