const express = require("express");
const app = express();
const BodyParser = require("body-parser")

app.listen(8089, function(){
    const port = "8089"
    console.log("Servidor rodando na url: http://localhost:"+port)
});

app.use(express.urlencoded({
    extended: true
}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/cotacoes/:chamado/:item/:descricao/:valor", function(req, res){
    
});

app.post("/pegaformulario", function(req, res){
    res.send("Data do processo de compra: "+req.body.data_pc)
});

app.use(express.static('public'));

//BodyParser
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())


