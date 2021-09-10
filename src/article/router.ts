import {Router} from "express"
import controller from "./controller"

const articleRouter: Router = Router()

articleRouter.post('/create', controller.store)
articleRouter.get('/all', controller.show)

export {articleRouter}