const express    = require('express');
const app        = express();
const router     = require('./router');
const knex       = require('knex')(require('./config'));
const bodyParser = require('body-parser');

const BookRepository = require('./book-repository');

app.set('books', new BookRepository(knex));
app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server started');
});
