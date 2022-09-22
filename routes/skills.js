import { Router } from 'express'
// import skills data
import { skills } from '../data/skill-data.js'

const router = Router()

/* GET skills listing. */
router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}
