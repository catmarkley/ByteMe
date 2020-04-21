// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
/*sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'ebrady6@nd.edu',
  from: 'bytemewebapp@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
*/

const client = require('@sendgrid/client'); 
client.setApiKey(process.env.SENDGRID_API_KEY); 
const request = {   method: 'POST',   url: '/v3/mail/send' , body: {
  "template_id": "d-babbb5fed2c344d1a8d2b0be5491e729",
  "personalizations": [
    {
      "dynamic_template_data": {
        "recipename": "Chicken Enchiladas",
        "subject": "Grocery List",
        "food": [
          {"name": "Chicken", "amount": "1", "unit" : "Pound(s)"},
          {"name": "Cheese", "amount": "1", "unit" : "Cup(s)"},
          {"name": "Tortilla", "amount": "6", "unit" : "Whole"}
        ]
      },
      "to": [
        {
          "email": "sadams9@nd.edu"
        }
      ]
    }
  ],
  "from": {
    "email": "bytemewebapp@gmail.com"
  }
}}; 
client.request(request) .then(([response, body]) => {   console.log(response.statusCode);   console.log(body); })
