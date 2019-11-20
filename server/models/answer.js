const mongoose = require('mongoose')
const { model, Schema } = mongoose

const answerSchema = new Schema ({
    description : {
        type : String,
        required: [true, 'descriptions is required']
    },
    votesUp : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    votesDown : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    userId: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    questionId: {
        type : Schema.Types.ObjectId,
        ref : 'Question'
    }
},{
    versionKey : false,
    timestamps : true
})

module.exports = model('Answer',answerSchema)