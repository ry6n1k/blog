const Category = require('../models/category')

exports.addCategory = (req, res) => {
    res.render('category.hbs')
}

exports.getCategory = (req, res) => {
    Category.find({}, (err, allCategories) => {
        if(err) {
            console.log(err)
            return res.sendStatus(400)
        }
        res.render('create.hbs', {
            categories: allCategories
        })
    })
}

exports.postCategory = (req, res) => {
    const categoryName = req.body.category
    const category = new Category({name: categoryName})
    category.save(err => {
        if(err) return console.log(err)
        res.redirect('/articles')
    })
}