const { verifyToken } = require('../helpers/jwt')
const UserModel = require('../models/user')
const QuestModel = require('../models/question')
const AnswerModel = require('../models/answer')

module.exports = {
    authentication(req, res, next){
        try {
            let decodedToken = verifyToken(req.headers.token)
            UserModel.findById(decodedToken.id)
                .then(user => {
                    if(user){
                        req.loggedUser = decodedToken
                        next()
                    }
                    else{
                        next({
                            status: 401,
                            message: 'Authentication Failed'
                        })
                    }
                })
                .catch(next)
        }
        catch(err) {
            next({ 
                status: 401,
                message: err 
            })
        }
    },
    authorizationQuestion(req, res, next){
        QuestModel.findById(req.params.id)
            .then(result => {
                if(!result){
                    next({ status: 404, message: 'Not Found' })
                }
                else if(result.userId == req.loggedUser.id){
                    next()
                }
                else{
                    next({ 
                        status: 403, 
                        message: 'Not Authorized' 
                    })
                }
            })
            .catch(next)
    },
    authorizationAnswer(req, res, next){
        AnswerModel.findById(req.params.id)
            .then(result => {
                if(!result){
                    next({ status: 404, message: 'Not Found' })
                }
                else if(result.userId == req.loggedUser.id){
                    next()
                }
                else{
                    next({ 
                        status: 403, 
                        message: 'Not Authorized' 
                    })
                }
            })
            .catch(next)
    }
}