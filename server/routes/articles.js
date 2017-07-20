const express = require('express');
const router = express.Router();
const articleController = require('../conctrollers/articleController');

router.get('/', articleController.allArticle);
router.get('/:id', articleController.articleByAuthor);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
