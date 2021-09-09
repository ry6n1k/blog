const Article = require('../article/model')

/*exports.addArticle = (req, res) => {
    res.render('create.hbs')
}*/

exports.getArticles = (req, res) => {
    Article.find({}, (err, allArticles) => {
        if (err) {
            console.log(err)
            return res.sendStatus(400)
        }
        res.render('articles.hbs', {
            articles: allArticles
        })
    })
}

exports.postArticle = (req, res) => {
    const articleTitle = req.body.title
    const articleContent = req.body.content
    const articleCategory = req.body.category
    const article = new Article({title: articleTitle, content: articleContent, category:articleCategory})
    article.save((err)=>{
        if(err) return console.log(err)
        res.redirect('/articles')
    })
}