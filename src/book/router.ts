import {Router} from "express"
import controller from './controller'

const bookRouter: Router = Router()

bookRouter.get('/new', controller.add)
bookRouter.get('/all', controller.show)
bookRouter.get(':id', controller.get)

bookRouter.post('/create', controller.store)
bookRouter.use('/:id/delete', controller.destroy)

export {bookRouter}