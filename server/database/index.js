const Sequelize = require('sequelize')
const Student = require('./student')
const Campus = require('./campus')
const db = require('./database')

//Association 

Campus.hasMany(Student)
Student.belongsTo(Campus) //add a foreign key to Student table (campusId)

module.exports = {
    db,
    Student,
    Campus
}