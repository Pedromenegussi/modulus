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
    finalidade: {
        type: Sequelize.STRING
    },
    v_dolar: {
        type: Sequelize.REAL
    },
    v_real: {
        type: Sequelize.REAL
    }
})

mapa_de_compra.sync({force: true})