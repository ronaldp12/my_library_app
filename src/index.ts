import { bookStore } from "./models/bookStore";
import { Book } from "./models/book";
import * as readline from 'readline';

let Library=new bookStore();

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function agregar():void {
    ask.question('Ingrese el ISBN: ', (ISBN) =>{
        ask.question('Ingrese el titulo: ', (titulo) =>{
            ask.question('Ingrese el precio: ', (precio) =>{
                ask.question('Ingrese el genero: ', (genero) =>{
                    ask.question('Ingrese la descripcion: ', (descripcion) =>{
                        let libro_add=new Book(ISBN,titulo,parseInt(precio),genero,descripcion)
                        Library.addBook(libro_add)
                        continuar()
                    })
                })
            })
        })
    } )
    
}


function opciones_menu():void {
    console.log("Menu")
    console.log("1 Agregar libro")
    console.log("2 Mostrar libro")
    console.log("3 Eliminar libro")
    console.log("4 Salir")
}

function Menu(opcion:string){
    switch (opcion) {
        case "1":
            agregar()
            break;
        case "2":
            Library.listBooks()
            continuar()
            break;
        case "3":
            ask.question('Ingrese el numero ISBN del libro a eliminar: ', (ISBN_remove) =>{
                Library.removeBook(ISBN_remove)
                continuar()
            })
            break;
        case "4":
            process.exit(0)
            break;
        default: console.log("Opcion no valida")
            break;
    }
}

function continuar() {
    ask.question('¿Desea continuar? ',(resp) =>{
        if (resp =="si") {
            opciones_menu()
            ask.question('Elija una opcion ', (opcion) =>{
                Menu(opcion)
            })
        } else{
            process.exit(0)
        }
    } )
}

function inicio() {
    opciones_menu()
    ask.question('Elija una opcion ', (opcion) =>{
        Menu(opcion)
    })
}

inicio()

