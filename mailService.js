const nodemailer=require("nodemailer");

let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:25,
    secure: false, 
    auth: {
      user:'develidje@gmail.com',
      pass:''
    }
  });
// nodemailer.sendMail()
  let info = transporter.sendMail({
    from: "develidje@gmail.com", 
    to: "devjeanpaul@gmail.com", 
    subject: "Bonjour", 
    text: "Exercice", 
    html: "<b>Hello world?</b>"
  },function(err,info){
        console.log("Message envoye", info);
        if(err){
            return err
        }
        return info
  });

  //console.log("Message envoye", info.messageId);
// let smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: 'develidje@gmail.com',
//         pass: ''
//     }
// });
// let mail = {
//     from: "develidje@gmail.com",
//     to: "devjeanpaul@gmail.com",
//     subject: "exercice",
//     html: "<b>Hello world?</b>"
// }
// smtpTransport.sendMail(mail, function(error, response){
//     if(error){
//         console.log("Erreur lors de l'envoie du mail!");
//         console.log(error);
//     }else{
//         console.log("Mail envoyé avec succès!")
//     }
//     smtpTransport.close();
// });
