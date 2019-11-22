const quesController = require('../controllers/questions')
const { authentication, authorizationQuestion } = require('../middlewares/auth')
const router = require('express').Router()

router.get('/',quesController.readAll)
router.use(authentication)
router.get('/:id',quesController.readOne)
router.post('/',quesController.create)
router.patch('/:id/voteup',quesController.updateVotesUp)
router.patch('/:id/votedown',quesController.updateVotesDown)
router.patch('/:id/star',quesController.updateStar)
router.patch('/:id', authorizationQuestion ,quesController.update)
router.delete('/:id', authorizationQuestion ,quesController.delete)

module.exports = router