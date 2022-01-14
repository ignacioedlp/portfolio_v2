require("dotenv").config();
let nodemailer = require("nodemailer");

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  //send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: process.env.MYEMAIL, // list of receivers
    subject: "Hello ✔", // Subject line
    text: req.body.message, // plain text body
    html: req.body.message, // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
