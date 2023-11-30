// very importatnt packages are imported
const express=require('express')
const app= express()
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')

//imported files
const router = require('./src/routes/api')


// other uses
app.use(express.json())
app.use(cors())


// connection with databae
let URL = process.env.DATABASE_URL

mongoose.connect(URL)



// using the router api
app.use('/api/v1', router)


module.exports = app