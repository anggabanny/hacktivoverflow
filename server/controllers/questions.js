const QuesModel = require('../models/question')
const UserModel = require('../models/user')

module.exports = {
    readAll(req,res,next){
        QuesModel.find()
            .populate('votesUp')
            .populate('votesDown')
            .populate('stars')
            .populate('userId')
            .then(user=>{
                res.status(200).json(user)
            })
            .catch(next)
    },
    create(req,res,next){
        QuesModel.create({
            title : req.body.title,
            description : req.body.description,
            userId : req.loggedUser.id
        })
        .then(question=>{
            res.status(201).json(question)
        })
        .catch(next)
    },
    update(req,res,next){
        QuesModel.findOneAndUpdate({
            _id : req.params.id
        },{
            title : req.body.title,
            description : req.body.description,
        },{ new : true })
        .then(question=>{
            res.status(201).json(question)
        })
        .catch(next)
    },
    updateVotesUp(req,res,next){
        QuesModel.find({ _id : req.params.id })
        .populate('votesUp')
        .populate('userId')
        .then(question=>{
            if (!question[0].votesUp) {
                return QuesModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { votesUp : req.loggedUser.id }},
                    { new : true })
            } else {
                let up = false
                let down = false
                for(let i = 0 ; i < question[0].votesUp.length; i++){
                    if (question[0].votesUp[i]._id == req.loggedUser.id) {
                        up = true
                        break;
                    }
                }
                if (up) {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesUp : req.loggedUser.id }},
                        { new : true })
                }
                for(let i = 0 ; i < question[0].votesDown.length; i++){
                    if (question[0].votesDown[i]._id == req.loggedUser.id) {
                        down = true
                        break;
                    }
                }
                if (down) {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesDown : req.loggedUser.id }},
                        { new : true })
                } else {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $push : { votesUp : req.loggedUser.id }},
                        { new : true })
                }
            }
        })
        .then(question=>{
            res.status(200).json(question)
        })
        .catch(next)
    },
    updateVotesDown(req,res,next){
        QuesModel.find({ _id : req.params.id })
        .populate('votesUp')
        .populate('userId')
        .then(question=>{
            if (!question[0].votesDown) {
                return QuesModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { votesDown : req.loggedUser.id }},
                    { new : true })
            } else {
                let up = false
                let down = false
                for(let i = 0 ; i < question[0].votesDown.length; i++){
                    if (question[0].votesDown[i]._id == req.loggedUser.id) {
                        down = true
                        break;
                    }
                }
                if (down) {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesDown : req.loggedUser.id }},
                        { new : true })
                }
                for(let i = 0 ; i < question[0].votesUp.length; i++){
                    if (question[0].votesUp[i]._id == req.loggedUser.id) {
                        up = true
                        break;
                    }
                }
                if (up) {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $pull : { votesUp : req.loggedUser.id }},
                        { new : true })
                } else {
                    return QuesModel.findOneAndUpdate(
                        { _id : req.params.id},
                        { $push : { votesDown : req.loggedUser.id }},
                        { new : true })
                }
            }
        })
        .then(question=>{
            res.status(200).json(question)
        })
        .catch(next)
    },
    updateStar(req,res,next){
        QuesModel.find({
            _id : req.params.id
        })
        .populate('stars')
        .populate('userId')
        .then(question=>{
            if (!question[0].stars) {                
                return QuesModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { stars : req.loggedUser.id }},
                    { new : true })
            }
            let flag = false
            for (let i = 0; i < question[0].stars.length; i++) {
                if (question[0].stars[i]._id == req.loggedUser.id) {
                    flag = true
                }
            }
            if (flag) {
                return QuesModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $pull : { stars : req.loggedUser.id }},
                    { new : true })
            } else {
                return QuesModel.findOneAndUpdate(
                    { _id : req.params.id},
                    { $push : { stars : req.loggedUser.id }},
                    { new : true })
            }
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    },
    delete(req,res,next){
        QuesModel.findOneAndDelete({
            _id : req.params.id
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    },
    readOne(req,res,next){
        QuesModel.findOne({
            _id : req.params.id
        })
        .populate('votesUp')
        .populate('votesDown')
        .populate('stars')
        .populate('userId')
        .then(question=>{
            res.status(200).json(question)
        })
        .catch(next)
    }
}