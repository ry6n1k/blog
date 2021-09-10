import {Request, Response} from "express"
import Article from './model'
import mongoose from "mongoose"

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

const store = (req: Request, res: Response) => {
    const article = new Article({
        _id: new mongoose.Types._ObjectId(),
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

export default {show, store}