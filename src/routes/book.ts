import {Router} from "express"

import controller from '../controllers/book'

const bookRouter: Router = Router()

bookRouter.use('/', controller.getAllBooks)

export {bookRouter}