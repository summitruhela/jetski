const config = require('../config/config')();
const nodemailer = require('nodemailer');

const all_functions = {
  
    'getCode': () => {
      var idLength=9;
      var chars="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
      chars=chars.split(",");
      var min=0;
      var max=chars.length-1;
      var id="";
      for(var i=0; i<idLength;i++)
      {
      id+=chars[ Math.floor(Math.random()*(max - min + 1) + min) ];
      }
      return id;
      },
    'sendemail': (email, subject, text, callback) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: config.nodemailer.user,
              pass: config.nodemailer.pass
            }
          });
          let mailOptions = {
            from: config.nodemailer.user,
            to: email,
            subject: subject,
            text: text
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              callback(error);
            } else {
              callback(null,'Email sent: ' + info.response);
            }
          });
    },
    'sendMessage': (message, number, callback) => {
        let client = new twilio(config.twilio.sid,config.twilio.auth_token);
        client.messages.create({
            body:message,
            to : number,
            from: config.twilio.number
          })
          .then((message)=>{
            callback(null,message);
          })
          .catch((response)=>{
            callback(response);
          }) 
    }
};

module.exports = all_functions;