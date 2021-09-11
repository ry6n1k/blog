import {Request, Response} from "express"
import Article from './model'

const show = (req: Request, res: Response) => {
    Article.find({})
        .exec()
        .then(articles => {
            return res.render('articles', {
                articles
            })
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const get = (req: Request, res: Response) => {
    Article.findById(req.params.id)
        .exec()
        .then(article => {
            return res.render('article', {
                article
            })
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const add = (req: Request, res: Response) => {
    return res.render('create')
}

const store = (req: Request, res: Response) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content
    })
    return article.save()
        .then(result => {
            return res.status(201).json({
                article: result
            })
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const destroy = (req: Request, res: Response) => {
    Article.findById(req.params.id)
        .exec()
        .then(article => {
            article.remove().then(r => res.redirect('/article/all'))
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default {show, get, add, store, destroy}