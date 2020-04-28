//routes folder// Specific Controller Functionality
const client = require('@sendgrid/client'); 

// credentials
client.setApiKey(process.env.SENDGRID_API_KEY); 

// class methods
const email = {
  'send': sendEmail
}

/**
  *
  * @name sendEmail
  *
  * @description Function to call sendgrid and send email with dynamic template
  * @param {object=} [req='req'] json dictionary
  * @param {object=} [res = 'res'] json response
  * @returns {undefined} It doesn't return
  */
function sendEmail(req, res){
  console.log('req is:', req.body)
  const request = {   method: 'POST',   url: '/v3/mail/send' , body: {
    "template_id": "d-babbb5fed2c344d1a8d2b0be5491e729",
    "personalizations": [
      {
        "dynamic_template_data": req.body,
        "to": [
          {
            "email": "ebrady6@nd.edu"
          }
        ]
      }
    ],
    "from": {
      "email": "bytemewebapp@gmail.com"
    }
  }}; 
  client.request(request) .then(([response, body]) => { 
    console.log(response.statusCode); 
    console.log(body); 
    if(response.statusCode < 300) {
        res.status(response.statusCode).send('Sent Email')
    }
    else{
      res.status(400).send('Sent Email')
    }
  })


}

module.exports = email
