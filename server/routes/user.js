const userController = require('../controllers/user')
const router = require('express').Router()

router.get('/',userController.findAll)
router.post('/register',userController.register)
router.post('/login',userController.login)
router.delete('/:id',userController.delete)

module.exports = router