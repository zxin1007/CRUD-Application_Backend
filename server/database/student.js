const sequelize = require ("sequelize")
const db = require('./database')

const Student = db.define('student', {
    student_id: {
        type: sequelize.INTEGER,
        primarykey : true,
        autoincrement : true
    },
    campus_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    first_name: {
      type: sequelize.STRING,
      allowNull: false
    },
    last_name: {
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