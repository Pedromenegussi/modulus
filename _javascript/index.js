const express = require("express");
const app = express();
const BodyParser = require("body-parser")
const mapa_de_compra = require("./models/post");
const handlebars = require('express-handlebars')

//Conexão com banco de dados MYSQL
const Sequelize = require("sequelize")
const sequelize = new Sequelize('logistica', 'root', '27452121', {
    host: 'localhost',
    dialect: 'mysql'
})

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

app.listen(8089, function(){
    const port = "8089"
    console.log("Servidor rodando na url: http://localhost:"+port)
});

//BodyParser
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

//ROTAS
app.get("/", function(req, res){
    res.sendFile(__dirname+"/views/index.html")
});

app.get("/stockstatus", function(req, res){
    res.sendFile(__dirname+"/views/stockstatus.html")
});

app.get("/cotacoes", function(req, res){
    res.sendFile(__dirname+"/views/cotacoes.html")
});

app.get("/form_compras", function(req, res){
    res.sendFile(__dirname+"/views/form_compras.html")
});

app.get("/listar_compras", function(req, res){
    mapa_de_compra.findAll().then(function(listagens){
        res.render('listagem', {listagem: listagens})
        console.log(listagens)
    })
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

 