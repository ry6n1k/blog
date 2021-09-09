import express from 'express'
import mongoose from 'mongoose'
import {router} from './routes/book'

const app = express()

app.set('view engine', 'hbs')

app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/blog_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    app.listen(3000)
})