const express = require("express");
const app = express();

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
    res.send("Data: "+req.body.data_pc+ "Processo de Compra: "+req.body.p_c)
});

app.use(express.static('public'));

