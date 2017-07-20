const User = require('../models/userModel');
const Article = require('../models/articleModel');



function createArticle(req,res) {
  let newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author,
    createdAt: new Date()
  })
  newArticle.save( (err, article) => {
    if(err) res.send(err)
    console.log('Create Article Success');
    res.send(aticle)
  })
}

function allArticle(req,res) {
  Article.find().populate('author')
  .exec( (err,articles) => {
    if(err) res.send(err)
    res.send(articles)
  })

}

function articleByAuthor(req,res) {

}


function updateArticle(req,res) {
  Article.update()
}

function deleteArticle(req,res) {

}

module.exports = {
  allArticle, articleByAuthor, createArticle,
  updateArticle, deleteArticle
}
