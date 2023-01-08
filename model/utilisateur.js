let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UtilisateurSchema = Schema({
    nomUtil: String,
    mdp: String,
    isAdmin: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
