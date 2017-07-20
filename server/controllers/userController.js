var User = require('../models/userModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var secret = process.env.SECRET_KEY;


function signUp(req,res) {
    let pwd = req.body.password;
    let newUser = User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: bcrypt.hashSncy(pwd,8)
    })
    newUser.save( (err,user) => {
      if(err) {
        res.send(err)
      } else {
        console.log("Sign Up Succes");
        res.send(user)
      }
    })
}

function logIn(req, res) {
  let pwd = req.body.password
  User.findOne({ username: req.body.username}, (error, response) => {
    if (error) res.json({msg: `Something error signup: ${error}`, success: false})
    else {
      if (bcrypt.compareSync(pwd, response.password)) {
        let token = jwt.sign({
          id: response._id,
          name: response.name,
          username: response.username,
          email:response.email
        }, secret, {expiresIn: '1d'})
        res.json({
          msg: 'Success signin',
          id: response._id,
          username: response.username,
          email: response.email,
          token})
      } else {
        res.json({msg: `Password is not match`})
      }
    }
  })
}

function allUser(req,res){
  User.find({}, (err,user) => {
    if(err) res.send(err)
    res.send(user)
  })
}

function oneUser(req,res){
  User.findById().populate('article_id')
  .exec( (err,user) => {
    if(err) res.send(err)
    res.send(user)
  })
}

function deleteUser(req,res) {
  User.remove({
    _id : req.params.id
  }, (err,user) => {
    if(err) res.send(err)
    res.send(user)
  })
}

module.exports = { logIn, signUp, allUser, oneUser,
deleteUser, updateUser }
