import { Router } from 'express'
// import skills data
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)

export {
  router
}
