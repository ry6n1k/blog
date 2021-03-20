const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/db')
const articleRouter = require('./routes/articleRouter')
const app = express()

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    res.render('welcome.hbs')
})

/*
mongoose.connect('mongodb://blog-config:b75EPfKQfG5dPPnw5JjbDa9ggH5cwJdiAcj0FiR4Z2hvgv1j0Hbd9PFlGiGASEKxMN48yP3UXR9xDCyMW6L4Jg==@blog-config.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@blog-config@', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(err)
    app.listen(3000)
})*/


mongoose.connect('mongodb://localhost:27017/', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(err)
    app.listen(3000)
})
