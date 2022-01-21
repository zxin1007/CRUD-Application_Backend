const sequelize = require ("sequelize")
const db = require('./database')

const Campus = db.define('campus', {
    campus_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    address: {
      type: sequelize.STRING,
      allowNull: false
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    },
    state: {
        type: sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    img: {
      type: sequelize.TEXT
    }
})

module.exports = Campus