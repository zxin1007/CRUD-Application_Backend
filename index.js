const Sequelize = require('sequelize')
const Student = require('./student')
const Campus = require('./campus')
const sequelize = require('./database')

sequelize.authenticate().then(()=>{
    console.log("success")
}).catch(err=>{
    console.log("error")
})

Student.sync().then(()=>{
    console.log("table and model synced success")
}).catch(err=>{
    console.log("error")
})

Campus.sync().then(()=>{
    console.log("table and model synced success")
}).catch(err=>{
    console.log("error")
})