function afficherNom(){
    var name =  document.getElementById("name");
	var message = "Bonjour " + name + " ... Vous êtes bien matinal ..."; 
	document.getElementById("spanRes").innerHTML="<b>"+message+"</b>";
}