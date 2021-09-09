import {Router} from "express"
import controller from "./controller"

const articleRouter: Router = Router()

articleRouter.get('/', controller.show)

export {articleRouter}