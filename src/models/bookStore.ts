import { Book } from "./book";

class bookStore {
    private books: Book[];

    constructor() {
        this.books=[];
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Pelicula '${book.titulo}' agregada a la biblioteca`);
    }

}