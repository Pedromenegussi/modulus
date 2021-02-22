const express = require("express");
const app = express();

app.listen(8089, function(){
    const port = "8089"
    console.log("Servidor rodando na url: http://localhost:"+port)
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/cotacoes/:chamado/:item/:descricao/:valor", function(req, res){
    
});

app.get("pegaformulario", function(req, res){
    res.send("<h1>Peguei o formulário</h1>")
});

app.use(express.static('public'));