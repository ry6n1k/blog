const express = require('express')
const articleController = require('../controllers/articleController')
const categoryController = require('../controllers/categoryController')
const articleRouter = express.Router()

articleRouter.use('/postarticle', articleController.postArticle)
articleRouter.use('/create', categoryController.getCategory)
articleRouter.use('/postcategory', categoryController.postCategory)
articleRouter.use('/category', categoryController.addCategory)
articleRouter.use('/', articleController.getArticles)

module.exports = articleRouter