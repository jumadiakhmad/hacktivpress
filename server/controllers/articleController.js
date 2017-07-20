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
    res.send(article)
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
  Article.findById(req.params.id, (err,article) => {
    if(err) {
      res.send(err)
    } else {
      if(article.author == req.body.author) {
        article.title = req.body.article,
        article.content = req.body.content,
        article.category = req.body.category,
        article.updatedAt = new Date()

        article.save( (err,result) => {
          if(err) res.send(err)
          console.log('Update Article Succes');
          res.send(result)
        })
      }
    }
  })
}

function deleteArticle(req,res) {
  Article.findOneAndRemove({
    _id: req.params.id
  }, (err,article) => {
    if(err) res.send(err)
    console.log("Delete Article Success");
    res.send(article)
  })
}

module.exports = {
  allArticle, articleByAuthor, createArticle,
  updateArticle, deleteArticle
}
