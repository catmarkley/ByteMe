//this would go in routes folder
//have a more descriptive name
//routes folder should be part of backend folder
//index.livetest.js in backend folder

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')

// requires controller modules
const EmailController = require('./email.controller')

router.use(cors())

router.post('/', jsonParser, EmailController.send)

module.exports = router
