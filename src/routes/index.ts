import { Router } from 'express'
import HomController from '../controller/HomeController'

const router = Router()

router.get('/', HomController.getRootPage)
router.post('/', HomController.createUser)

export default router