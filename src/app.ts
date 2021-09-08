import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('welcome to typescript blog')
})

app.listen(3000)