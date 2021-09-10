import {Router} from "express"
import controller from './controller'

const bookRouter: Router = Router()

bookRouter.post('/create', controller.store)
bookRouter.get('/all', controller.show)

export {bookRouter}