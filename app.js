var express = require('express');
var body=require('body-parser');
var app = express();
const db=require('monk')('localhost:27017/Db');
app.use(body());
app.get('/',function(req,res){
  res.sendFile('home.html',{root:__dirname});
});
app.post('/',function(req,res){
  data={
    Name:req.body.firstname, //get name
    Lname:req.body.lastname,
    University:req.body.University
  };
  console.log(data);
  var ct=db.get('blogs'); // edit collection
  ct.insert({
    Name:req.body.firstname,
    Lname:req.body.lastname,
    University:req.body.University
  });
});
app.listen(8801);
