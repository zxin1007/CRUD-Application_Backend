const express = require("express")
const app = express()
const PORT = 3000
const morgan = require('morgan')
const { db } = require('./server/database/index')
const cors = require('cors')
const useApi = require('./server/api')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api',useApi)

db.authenticate()

db.sync().then(() => {
    console.log('db synced')
     app.listen(PORT, () =>
      console.log(`listening on port ${PORT}`)
     )
})  