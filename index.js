const express = require("express")
const app = express()
const PORT = 3000
const morgan = require('morgan')
const { db } = require('./server/database')
const cors = require('cors')
const useApi = require('./server/api')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', useApi)

db.sync().then(() => {
    console.log('db synced')
     app.listen(PORT, () =>
      console.log(`listening on port ${PORT}`)
     )
})  

// app.get("/api", async (req, res)=>{
//   // res.send("musicians")
//   await db.authenticate()
//   const result = await db.query("select * from student")
//   console.log(result)
//   res.status(200).json({
//     students : result,
//   })

// })