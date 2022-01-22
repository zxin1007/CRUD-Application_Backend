const sequelize = require ("sequelize")
const db = require('./database')

const Student = db.define('student', {
    firstName: {
      type: sequelize.STRING,
      allowNull: false
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
      type: sequelize.STRING,
    },
    gpa: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
          max: 4
        }
    },
    img: {
      type: sequelize.STRING
    }
},
{
  timestamps : false
})

module.exports = Student