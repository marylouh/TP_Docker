import express from 'express' ;

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();

//support parsing of JSON post data
var jsonParser = express.json({  extended: true}); 
app.use(jsonParser);

//les routes en /html/... seront gérées par express
//par de simples renvois des fichiers statiques du répertoire "./html"
//app.use('/html', express.static(__dirname+"/html"));

app.get('/', function(req , res ) {
    res.sendFile(__dirname+"/html/index.html")
});

app.get('/:message', function(req , res ) {
    res.json(req.params)
});


app.listen(8282 , function () {
   console.log("http://localhost:8282");
});
