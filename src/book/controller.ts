import {NextFunction, Request, Response} from "express"
import Book from "./model"

const show = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then(results => {
            return res.status(200).json({
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
    Book.find({id: req.params.id}, books => {
        return res.status(200).json({
            books
        })
    })
}

const store = (req: Request, res: Response) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author
    })
    return book.save()
        .then(result => {
            return res.status(201).json({
                book: result
            })
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default {show, get, store}