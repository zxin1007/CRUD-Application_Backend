const sequelize = require ("sequelize")
const db = require('./database')

const Student = db.define('student', {
    studentId: {
        type: sequelize.INTEGER,
        primarykey : true,
        autoincrement : true
    },
    campusId: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    firstName: {
      type: sequelize.STRING,
      allowNull: false
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: false
    },
    gpa: {
        type: sequelize.INTEGER,
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