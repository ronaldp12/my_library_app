import { bookStore } from "./models/bookStore";
import { Book } from "./models/book";
import * as readline from 'readline';

let Library=new bookStore();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function agregar():void {
    rl.question('Ingrese el ISBN:', (ISBN) =>{
        rl.question('Ingrese el titulo:', (titulo) =>{
            rl.question('Ingrese el precio:', (precio) =>{
                rl.question('Ingrese el genero:', (genero) =>{
                    rl.question('Ingrese la descripcion:', (descripcion) =>{
                        let libro_add=new Book(ISBN,titulo,parseInt(precio),genero,descripcion)
                        Library.addBook(libro_add)
                    })
                })
            })
        })
    } )
    
}
agregar()
