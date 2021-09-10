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
    res.send('typescript')
})

mongoose.connect('mongodb://localhost:27017/blog_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    app.listen(3000)
})