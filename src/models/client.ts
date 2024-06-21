export class Client {
    RUT: string;
    nombre: string;
    telefono: string;
    direccion:string;
    correo_electronico: string;
    
    constructor(
        RUT: string,
        nombre: string,
        telefono: string,
        direccion:string,
        correo_electronico: string,) {

    this.RUT=RUT;
    this.nombre=nombre;
    this.telefono=telefono;
    this.direccion=direccion;
    this.correo_electronico=correo_electronico;

    }
} 
