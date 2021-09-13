import {NextFunction, Request, Response} from "express"
import Book from "./model"

const show = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then(results => {
            return res.render('book/books', {
                books: results,
                count: results.length
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
    Book.findById(req.params.id)
        .exec()
        .then(book => {
            return res.render('', {
                book: book
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
    return res.render('book/create')
}

const store = (req: Request, res: Response) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author
    })
    return book.save()
        .then(result => {
            return res.redirect('/book/all')
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const destroy = (req: Request, res: Response) => {
    Book.findById(req.params.id)
        .exec()
        .then(book => {
            book.remove().then(r => res.redirect('/book/all'))
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default {show, get, add, store, destroy}