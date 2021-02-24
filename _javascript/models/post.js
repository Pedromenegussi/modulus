const Sequelize = require("sequelize")
const sequelize = new Sequelize('logistica', 'root', '27452121', {
    host: 'localhost',
    dialect: 'mysql'
})
const mapa_de_compra = sequelize.define('mapa_de_compras', {
    data_pc: {
        type: Sequelize.DATE
    },
    p_c: {
        type: Sequelize.STRING
    },
    cotacao: {
        type: Sequelize.STRING
    },
    fornecedor: {
        type: Sequelize.STRING
    },
    qtd: {
        type: Sequelize.INTEGER
    },
    partnumber: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    },
    sn: {
        type: Sequelize.STRING
    },
    finalidade: {
        type: Sequelize.STRING
    },
    v_dolar: {
        type: Sequelize.REAL
    },
    v_real: {
        type: Sequelize.REAL
    }, 
    frete_interno: {
        type: Sequelize.REAL
    },
    frete_usa: {
        type: Sequelize.REAL
    },
    frete_br: {
        type: Sequelize.REAL
    },
    custo_final: {
        type: Sequelize.REAL
    },
    estorno: {
        type: Sequelize.REAL
    },
    forma_pgto: {
        type: Sequelize.STRING
    },
    forma_envio: {
        type: Sequelize.STRING
    },
    recebido_em: {
        type: Sequelize.DATE
    },
    /*tempo_dias: {
        //type: Sequelize.INTEGER
    },*/
    obs:{
        type: Sequelize.TEXT
    },
    nfe: {
        type: Sequelize.BOOLEAN
    }
})

//mapa_de_compra.sync({force: true})

module.exports = mapa_de_compra;