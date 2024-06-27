import { bookStore } from "./models/bookStore";
import { Book } from "./models/book";
import * as readline from 'readline';
import { Client } from "./models/client";
import { clientMethods } from "./models/clientMethods";

let Library=new bookStore();
let LibraryClient=new clientMethods();

let libro1= new Book("123", "Rebelion en la granja", 23000, "Suspenso","Los animales de la granja de los Jones se sublevan contra sus dueños humanos y los vencen. Pero pronto surgen entre ellos rivalidades y envidias, y algunos se alían con los amos que derrocaron, traicionando su propia identidad y los intereses de su clase." )
let libro2= new Book("124", "El resplandor", 45000, "Terror", "Un hombre acepta un trabajo como cuidador de un hotel en invierno, pero el aislamiento y la presencia sobrenatural del lugar comienzan a afectar su cordura.")
let libro3= new Book("125", "La casa de los espiritus", 60000,"terror","La historia de la familia Trueba en un país latinoamericano imaginario, marcada por el amor y la tragedia.")

Library.addBook(libro1)
Library.addBook(libro2)
Library.addBook(libro3)

let cliente1=new Client("1090", "Juana Ortiz Perez", "321098762", "calle 23 #34-23", "juanita@gmail.com")
let cliente2=new Client("1091", "Gonzalo Mendez Garcia", "3128763422", "calle 12 #09-12", "gonzalito@gmail.com")
let cliente3=new Client("1092", "Jaime Castaño Escallon", "31323890467", "calle 21 #23-12", "jaimito@gmail.com")

LibraryClient.addClient(cliente1)
LibraryClient.addClient(cliente2)
LibraryClient.addClient(cliente3)

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

