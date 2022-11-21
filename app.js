const express = require ('express')
const dotenv = require('dotenv')
const app = express()
// const multer  = require('multer')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config({path: './config.env'})
require('./db/conn')
app.use(express.json())
app.use(bodyParser.json());

// const campaign = require('./model/campaignSchema')
app.use(require('./router/route'))
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("server is runnig at port 3000")
})
