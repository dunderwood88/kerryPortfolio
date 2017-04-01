var querystring = require('querystring');
var request = require('request');
var nodemailer = require('nodemailer');
var cfg = require('../../config');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: cfg.mailUser,
        pass: cfg.mailPass
    } 
});

exports.send = function(req, res){
    
    var htmlContent = '<p>Name: ' + req.body.name + '</p>' +
                    '<p>Email: ' + req.body.email + '</p>' +
                    '<p>Message: ' + req.body.message + '</p>';

    var mailOptions = {
        to: cfg.mailUser,
        subject: 'New message',
        from: req.body.name + ' <' + req.body.email + '>',
        sender: req.body.email,
        html: htmlContent
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
        }else{
            console.log('Message sent: ' + info.response);
            res.json(req.body);
        }
    });
};