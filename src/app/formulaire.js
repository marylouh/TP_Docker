import express from 'express';
const apiRouter = express.Router();

apiRouter.route('/formulaire')
.get( function(req , res , next ) {
    var name = req.params.name;
    res.send(name);
});

function afficherNom(name){
    var name =  document.getElementById("name");
	var message = "Bonjour " + name + " ... Vous êtes bien matinal ..."; 
	document.getElementById("spanRes").innerHTML="<b>"+message+"</b>";
}    