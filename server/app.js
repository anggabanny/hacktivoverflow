if (process.env.NODE_ENV === 'development'){ require('dotenv').config() }

const errorHandler = require('./middlewares/errorHandler')
const routes = require('./routes')
require('./config/mongoose')

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, (_=>{ console.log(`listen to port`, PORT)}))