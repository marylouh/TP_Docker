import express from 'express';
const apiRouter = express.Router();

apiRouter.route('/formulaire')
.get( function(req, res) {
    var name = req.body;
    var message = "Bonjour " + name + " ... Vous êtes bien matinal ...";
    res.send(message);
});

// function afficherNom(name){
//     var name =  document.getElementById("name");
// 	var message = "Bonjour " + name + " ... Vous êtes bien matinal ..."; 
// 	document.getElementById("spanRes").innerHTML="<b>"+message+"</b>";
// }

export default { apiRouter }