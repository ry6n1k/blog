import {Router} from "express"
import controller from "./controller"

const articleRouter: Router = Router()

articleRouter.get('/new', controller.add)
articleRouter.post('/create', controller.store)
articleRouter.get('/all', controller.show)
articleRouter.get('/:id', controller.get)

export {articleRouter}