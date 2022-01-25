const express = require("express")
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')
const { db } = require('./database/index')
const cors = require('cors')
const useApi = require('./api')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api',useApi)

// db.authenticate() //by default

db.sync().then(() => {
    console.log('database synced')
     app.listen(PORT, () =>
      console.log(`listening on port ${PORT}`)
     )
})  