const express = require ('express');
const app = express();
const port = 3012;

// moteur de rendu ejs
app.set('view engine', 'ejs');

// route  qui appel une fonction qui fait un rendu sur index.ejs
app.get('/', function (req, res) {
    displayname(res)
});

// fonction qui affiche un prénom #middleware
function displayname (res){
    var name = "alexandre";
    res.render('index', {
        data: name
    });
}

// port d'écoute du serveur
app.listen(port, function () {
    console.log("Server ON / Port : " + port);
});