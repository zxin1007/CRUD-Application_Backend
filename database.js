const Sequelize = require ("sequelize")

const sequelize = new Sequelize ('crud','postgres', 'yourpassword',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize