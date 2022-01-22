const express = require("express")
const app = express()
const PORT = 3000
const morgan = require('morgan')
const { db } = require('./server/database')
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

db.sync().then(() => {
    console.log('db synced')
    app.listen(PORT, () =>
      console.log(`listening on port ${PORT}`)
    )
  })  