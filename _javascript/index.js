const express = require("express");
const app = express();
const BodyParser = require("body-parser")
const mapa_de_compra = require('./models/post')

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

app.get("/form_compras", function(req, res){
    res.sendFile(__dirname+"/views/form_compras.html")
})

app.post("/pegaformulario", function(req, res){
    mapa_de_compra.create({
        data_pc: req.body.data_pc,
        p_c: req.body.p_c,
        cotacao: req.body.cotacao,
        fornecedor: req.body.fornecedor,
        qtd: req.body.qtd,
        partnumber: req.body.partnumber,
        descricao: req.body.descricao,
        sn: req.body.sn,
        finalidade: req.body.finalidade,
        v_dolar: req.body.v_dolar,
        v_real: req.body.v_real,
        frete_interno: req.body.frete_interno,
        frete_usa: req.body.frete_usa,
        frete_br: req.body.frete_br,
        custo_final: req.body.custo_final,
        estorno: req.body.estorno,
        forma_pgto: req.body.forma_pgto,
        forma_envio: req.body.forma_envio,
        recebido_em: req.body.recebido_em,
        tempo_dias: req.body.tempo_dias,
        obs: req.body.obs,
        nfe: req.body.nfe
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro! "+erro)
    })
});


app.use(express.static('public'));

//BodyParser
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())


