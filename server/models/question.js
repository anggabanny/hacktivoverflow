const mongoose = require('mongoose')
const { model, Schema } = mongoose

const questionSchema = new Schema ({
    title : {
        type : String,
        required: [true, 'name is required']
    },
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
    stars:[{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }]
},{
    versionKey : false,
    timestamps : true
})

module.exports = model('Question',questionSchema)