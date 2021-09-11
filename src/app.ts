import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import {bookRouter} from './book/router'
import {articleRouter} from './article/router'

const app = express()

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/book', bookRouter)
app.use('/article', articleRouter)

app.get('/',(req, res) => {
    res.render('welcome')
})

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    app.listen(process.env.PORT)
})

module.exports.app = app