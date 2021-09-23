import {Router} from "express"
import controller from "./controller"

const articleRouter: Router = Router()

articleRouter.get('/new', controller.add)
articleRouter.get('/all', controller.show)
articleRouter.get('/:id', controller.get)
articleRouter.get('/:id/update', controller.edit)

articleRouter.post('/create', controller.store)
articleRouter.put('/:id/update', controller.update)
articleRouter.use('/:id/delete', controller.destroy)

export {articleRouter}