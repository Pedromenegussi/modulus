const express = require("express");
const app = express();

app.listen(8089, function(){
    console.log("Servidor rodando na url: http://localhost:8081")
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/cotacoes/:chamado/:item/:descricao/:valor", function(req, res){
    res.send("<h2>Cotação: "+req.params.cotacoes+"</h2:")
})

app.use(express.static('public'));