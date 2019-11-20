const answerController = require('../controllers/answer')
const { authentication, authorizationAnswer } = require('../middlewares/auth')
const router = require('express').Router()

router.get('/',answerController.readAll)
router.use(authentication)
router.post('/:id',answerController.create)
router.patch('/:id/voteup', answerController.updateVotesUp)
router.patch('/:id/votedown', answerController.updateVotesDown)
router.patch('/:id', authorizationAnswer, answerController.update)
router.delete('/:id', authorizationAnswer, answerController.delete)

module.exports = router