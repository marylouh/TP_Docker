import express from 'express';
const apiRouter = express.Router();

window.addEventListener("load",()=>{

	var name = document.getElementById("name");

    afficherNom(name);

    //name.style.display="block";


});

function afficherNom(name){
var message = "Bonjour " + name + " ... Vous êtes bien matinal ..."; 
}