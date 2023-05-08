import CustomBook from './CustomBook.js';

class CustomCollection {
    constructor() {
        this.bookCollection = [];
        this.getBooksFromLocalStorage();
    }

    addBook(title, author) {
        const newBook = new CustomBook(title, author);
        this.bookCollection = this.bookCollection.concat(newBook);
        localStorage.setItem('books', JSON.stringify(this.bookCollection));
    }

    removeBook(i) {
        this.bookCollection.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(this.bookCollection));
      }

    getBooksFromLocalStorage() {
        const books = localStorage.getItem('books');
        const allBooks = JSON.parse(books);
        if (books) {
            this.bookCollection = allBooks;
        }
    }
}

const newBooks = new CustomCollection();
export default newBooks;