import { bookStore } from "./models/bookStore";
import { Book } from "./models/book";
import * as readline from 'readline';
import { Client } from "./models/client";
import { clientMethods } from "./models/clientMethods";

let Library=new bookStore();
let LibraryClient=new clientMethods();

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

function agregarClient():void {
    ask.question('Ingrese el RUT: ', (RUT) =>{
        ask.question('Ingrese el Nombre: ', (nombre) =>{
            ask.question('Ingrese el Telefono: ', (telefono) =>{
                ask.question('Ingrese el Direccion: ', (direccion) =>{
                    ask.question('Ingrese la Correo Electronico: ', (correo_electronico) =>{
                        let client_add=new Client(RUT,nombre,telefono,direccion,correo_electronico)
                        LibraryClient.addClient(client_add)
                        continuar()
                    })
                })
            })
        })
    } )
    
}

function menuInicial():void {
    console.log("Menu Inicial")
    console.log("1 Gestionar Libro")
    console.log("2 Gestionar Cliente")
}


function opciones_menu():void {
    console.log("Menu")
    console.log("1 Agregar libro")
    console.log("2 Mostrar libro")
    console.log("3 Eliminar libro")
    console.log("4 Salir")
    ask.question('Elija una opcion ', (opcion2) =>{
        switch (opcion2) {
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
    })
    
}

function opciones_menu2():void {
    console.log("Menu")
    console.log("1 Agregar cliente")
    console.log("2 Mostrar cliente")
    console.log("3 Eliminar cliente")
    console.log("4 Salir")
    ask.question('Elija una opcion ', (opcion2) => {
        switch (opcion2) {
            case "1":
                agregarClient()
                break;
            case "2":
                LibraryClient.listClients()
                continuar()
                break;
            case "3":
                ask.question('Ingrese el numero RUT del Cliente a eliminar: ', (RUT_remove) =>{
                    LibraryClient.removeClient(RUT_remove)
                    continuar()
                })
                break;
            case "4":
                process.exit(0)
                break;
            default: console.log("Opcion no valida")
                break;
        }
    })
    
}

function Menu(opcion:string){
    switch (opcion) {
        case "1":
            opciones_menu()
            break;
        case "2":
            opciones_menu2()
            break;
    
        default:console.log("Opcion no valida")
            break;
    }
    
}

function continuar() {
    ask.question('¿Desea continuar? ',(resp) =>{
        if (resp =="si") {
            menuInicial()
            ask.question('Elija una opcion ', (opcion2) =>{
                switch (opcion2) {
                    case "1":
                        opciones_menu()
                        ask.question('Elija una opcion', (opcion) =>{
                            Menu(opcion)
                        })
                        break;
                    case "2":
                        opciones_menu2()
                        ask.question('Elija una opcion', (opcion) =>{
                            Menu(opcion)
                        })
                        break;
                    default:console.log("Opcion no valida")
                        break;
                }
            })
        } else{
            process.exit(0)
        }
    } )
}

function inicio() {
    menuInicial()
    ask.question('Elija una opcion ', (opcion) =>{
        Menu(opcion)
    })
}

inicio()

