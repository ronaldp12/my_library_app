import { Book } from "./book";

export class bookStore {
    private books: Book[];

    constructor() {
        this.books=[];
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Libro '${book.titulo}' agregada a la biblioteca`)
    }

    removeFilm(titulo: string): void{
        const index =this.books.findIndex(book => book.titulo === titulo)
        if (index !==-1) {
            this.books.splice(index,1)
            console.log(`Libro '${titulo}' eliminada de la biblioteca`)
        }else{
            console.log(`Libro '${titulo}' no encontrado en la biblioteca`)
        }
    }

    listFilms():void{
        if (this.books.length ===0) {
            console.log("La biblioteca esta vacía")
        }else{
            console.log("Libros en la biblioteca")
            this.books.forEach(book =>{
                console.log(`-ISBN: ${book.ISBN}, Titulo: ${book.titulo}, Precio: ${book.precio}, Género: ${book.genero}, Descripcion: ${book.descripcion}`)
            })

        }
    }
}