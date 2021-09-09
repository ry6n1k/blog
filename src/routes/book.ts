import {Router} from "express"

import controller from '../controllers/book'

const router: Router = Router()

router.use('/', controller.getAllBooks)

export {router}