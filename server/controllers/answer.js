const QuesModel = require('../models/question')
const UserModel = require('../models/user')
const AnswerModel = require('../models/answer')

module.exports = {
    readAll(req,res,next){
        AnswerModel.find()
            .populate('questionId')
            .populate('userId')
            .then(user=>{
                res.status(200).json(user)
            })
            .catch(next)
    },
    create(req,res,next){
        AnswerModel.create({
            description : req.body.description,
            userId : req.loggedUser.id,
            questionId : req.params.id
        })
        .then(question=>{
            res.status(201).json(question)
        })
        .catch(next)
    },
    update(req,res,next){
        AnswerModel.findOneAndUpdate({
            _id : req.params.id
        },{
            description : req.body.description,
        },{ new : true })
        .then(question=>{
            res.status(201).json(question)
        })
        .catch(next)
    },
    updateVotesUp(req,res,next){
        AnswerModel.find({ _id : req.params.id })
        .populate('votesUp')
        .populate('userId')
        .then(answer=>{
            if (!answer[0].votesUp) {
                return AnswerModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { votesUp : req.loggedUser.id }},
                    { new : true })
            } else {
                let up = false
                let down = false
                for(let i = 0 ; i < answer[0].votesUp.length; i++){
                    if (answer[0].votesUp[i]._id == req.loggedUser.id) {
                        up = true
                        break;
                    }
                }
                if (up) {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesUp : req.loggedUser.id }},
                        { new : true })
                }
                for(let i = 0 ; i < answer[0].votesDown.length; i++){
                    if (answer[0].votesDown[i]._id == req.loggedUser.id) {
                        down = true
                        break;
                    }
                }
                if (down) {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesDown : req.loggedUser.id }},
                        { new : true })
                } else {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $push : { votesUp : req.loggedUser.id }},
                        { new : true })
                }
            }
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    },
    updateVotesDown(req,res,next){
        AnswerModel.find({ _id : req.params.id })
        .populate('votesUp')
        .populate('userId')
        .then(answer=>{
            if (!answer[0].votesDown) {
                return AnswerModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { votesDown : req.loggedUser.id }},
                    { new : true })
            } else {
                let up = false
                let down = false
                for(let i = 0 ; i < answer[0].votesDown.length; i++){
                    if (answer[0].votesDown[i]._id == req.loggedUser.id) {
                        down = true
                        break;
                    }
                }
                if (down) {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesDown : req.loggedUser.id }},
                        { new : true })
                }
                for(let i = 0 ; i < answer[0].votesUp.length; i++){
                    if (answer[0].votesUp[i]._id == req.loggedUser.id) {
                        up = true
                        break;
                    }
                }
                if (up) {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesUp : req.loggedUser.id }},
                        { new : true })
                } else {
                    return AnswerModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $push : { votesDown : req.loggedUser.id }},
                        { new : true })
                }
            }
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    },
    delete(req,res,next){
        AnswerModel.findOneAndDelete({
            _id : req.params.id
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    }
}