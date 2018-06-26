const express = require ('express');
const app = express();
const port = 3012;

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', function (req, res) {
    var name = "alexandre";
    res.render('index', {
        data: displayname(name)
    })
});

app.listen(port, function () {
    console.log("Server ON / Port : " + port);
});

function displayname (name){
    return name;
}