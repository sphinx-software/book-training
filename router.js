const express    = require('express');
const Router     = express.Router;
const Book       = require('./book');

let router = new Router();



router.get('/books', (request, response) => {
    // todo
});

router.post('/book', (request, response, next) => {
    let repository = request.app.get('books');
    let book = new Book(request.body.title);


    repository.save(book).then(savedBook => {
        response.json(savedBook.toJson())
    }).catch(next)
});


module.exports = router;