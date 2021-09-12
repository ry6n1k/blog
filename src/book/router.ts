import {Router} from "express"
import controller from './controller'

const bookRouter: Router = Router()

bookRouter.post('/create', controller.store)
bookRouter.get('/new', controller.add)
bookRouter.get('/all', controller.show)

export {bookRouter}