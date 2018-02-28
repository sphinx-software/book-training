class BookRepository {
    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }
    /**
     *
     * @param {Book} book
     * @return {Promise<void>}
     */
    save(book) {
        return book.getId() ?
            this.connection('books').update({title : book.getTitle()}).where({id : book.getId()}) :
            this.connection('books').insert({title : book.getTitle()}).then(insertedIds => {
                book.setId(insertedIds[0]);
                return book 
            });
    }

    /**
     * @return {Promise<Book[]>}
     */
    all() {

    }

    /**
     * @param {int} id
     * @return {Promise<void>}
     */
    delete(id) {
        return this.connection('books').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        });
    }
}

module.exports = BookRepository;
