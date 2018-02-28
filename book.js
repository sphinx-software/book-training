class Book {
    /**
     *
     * @param {string} title
     */
    constructor(title) {
        this.title = title;
    }
    /**
     *
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     *
     * @return {int|null}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    toJson() {
        return {
            id: this.getId(),
            title: this.getTitle()
        }
    }
}
module.exports = Book;