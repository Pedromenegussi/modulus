const Sequelize = require("sequelize")
const sequelize = new Sequelize('logistica', 'root', '27452121', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar! '+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}