require('dotenv').config();
var User = require('../models/userModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var secret = process.env.SECRET_KEY;

function signUp(req, res) {
  var hash = bcrypt.hashSync(req.body.password, 8)

  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.send(user)
    }
  })
}

function logIn(req, res) {
  let username = req.body.username
  let password = req.body.password
  User.findOne({username: username}, (err, user) =>{
    if(err) {
      res.send(err)
    } else {
      if(user) {
        bcrypt.compare(password,user.password)
        .then(result => {
          if(result) {
            let token = jwt.sign({ _id: user._id, username: user.username, email: user.email}, secret)
            res.send(({token: token}))
          }
        })
      } else {
        res.send({msg: 'User tidak ada'})
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
deleteUser }
