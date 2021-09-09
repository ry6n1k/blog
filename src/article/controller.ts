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
        .catch(error=>{
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default { show }