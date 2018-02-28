const Book = require('./book');
const BookRepository = require('./book-repository');

const knex = require('knex')({
   client : 'mysql',
   connection : {
       host : 'localhost',
       user : 'root',
       password : '123456',
       database : 'CRUDBook'
   }
});


let repository = new BookRepository(knex);



/// TODO test from here

// let book = new Book('Gio thi anh hua de lam cai lol` j`');


// book.setId(1);
//
repository.delete(2).then(() => {
    console.log('success');
});
