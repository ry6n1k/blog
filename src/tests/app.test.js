const request = require('supertest')

let app = require('../../dist/app').app

it('return home page', function (done) {
    request(app)
        .get('/')
        .expect(200)
        .end(done)
})

it('return articles', function (done){
    request(app)
        .get('/article/all')
        .expect(200)
        .end(done)
})

it('return books', function (done){
    request(app)
        .get('/book/all')
        .expect(200)
        .end(done)
})