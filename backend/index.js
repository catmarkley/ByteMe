const express = require('express')

// 3rd party libraries

// custom routes
const email = require('./routes/email.test')

// instantiate express instance
const app = express()


app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})


//register custom routes
app.use('/email', email)


// define port
const port = process.env.PORT || 1338
//create server instance
const httpServer = require('http').createServer(app)

//server listen
httpServer.listen(port, () => {
  console.log('my express server is running on port ' + port + '.')
})
