import { Client } from "./client";

export class clientMethods {
    private clients: Client[];

    constructor() {
        this.clients=[];
    }

    addClient(client: Client): void {
        this.clients.push(client);
        console.log(`Cliente '${client.nombre}' agregado exitosamente`)
    }

    removeClient(RUT: string): void{
        const index =this.clients.findIndex(client => client.RUT === RUT)
        if (index !==-1) {
            this.clients.splice(index,1)
            console.log(`Cliente '${RUT}' eliminado`)
        }else{
            console.log(`Cliente '${RUT}' no encontrado`)
        }
    }

    listClients():void{
        if (this.clients.length ===0) {
            console.log("La biblioteca esta vacía")
        }else{
            console.log("Clientes en la biblioteca")
            this.clients.forEach(client =>{
                console.log(`-RUT: ${client.RUT}, Nombre: ${client.nombre}, Telefono: ${client.telefono}, Direccion: ${client.direccion}, Correo Electronico: ${client.correo_electronico}`)
            })

        }
    }
}