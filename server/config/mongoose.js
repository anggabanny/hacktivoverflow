const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI
console.log(process.env.MONGO_URI);

const configuration = {
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology : true
}
mongoose.connect(mongoUri, configuration, (err=>{ err ? console.log(`failed connect`) : console.log(`success connect`)}))