const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const moment = require('moment');
const Sermon = require('../models/sermon');
const Comment = require('../models/comment');
const Image = require('../models/image');

/* GET home page. */
router.get('/', function(req, res, next) {
  Sermon.find({}).sort({index:-1}).limit(2).exec(function(err,sermons){
    if(err) throw err;
    //console.log(sermons)
    res.render('index', {
      title: 'Home | RCCG Lighthouse Parish',
      sermons:sermons
    });
  }); 
  
});

//get about 
router.get('/about', (req,res,next)=>{
  res.render('about', {title:'About Us | RCCG Lighthouse Parish'})
});
router.get('/events', (req,res,next)=>{
  res.render('events', {title:'Upcomming Events'});
});
router.get('/sermons', (req,res,next)=>{
  Sermon.find({}).sort({index:-1}).exec(function(err,sermons){
    //console.log(sermons);
    res.render('sermons', {
      title:'Sermons',
      sermons:sermons
    });
  })
});
router.get('/sermons/:sermonLink', (req,res,next)=>{
  Sermon.findOne({link:req.params.sermonLink}).exec(function(err, sermon){
    if(err) throw err;
    console.log(sermon);
    Comment.find({sermonRef:req.params.sermonLink}).exec(function(err, comments){
      if(err) throw err;
      console.log(comments);
      res.render('readsermon', {
        title:'Sermons',
        sermon:sermon,
        comments:comments
      });
    })
    
  });
});
//Post Comments
router.post('/sermons/:sermonLink', (req,res,next)=>{
  // TODO ----> Run Valildation For Errors
  let comment = new Comment({
    name:req.body.name,
    comment:req.body.comment,
    email:req.body.email,
    sermonRef:req.params.sermonLink,
    date:moment().format("D MMM YYYY")
  })
  comment.save(function(err,done){
    if(err) throw err;
    res.redirect('/sermons/' + req.params.sermonLink);
  })

});


// Get gallery
router.get('/gallery', (req,res,next)=>{
  Image.find({}).sort({index:-1}).exec(function(err,images){
    res.render('gallery', {title:'Photo Gallery',images:images});
  });
})
router.get('/contact', (req,res,next)=>{
  res.render('contact', {title:'Contact Us'})
});


/* Send Mails*/

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
	user: process.env.email,
	pass: process.env.password,
  }
});
router.post('/contact', (req,res,next)=>{
  // setup email data
  var mailOptions = { 
    from: req.body.email,
    to: process.env.email,
    subject: 'I Am New Here',
    text: `Hi, I am ${req.body.name}. 
      'req.body.mailBody`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      //console.log(error);
    } else {
      //console.log('Email sent: ' +  info.response +', ' + info.messageId);
      res.render('success', {title:'Email recieved', msg:'Thank you for contacting us!. Your email has been recieved'});
    }
  });
});

module.exports = router;
