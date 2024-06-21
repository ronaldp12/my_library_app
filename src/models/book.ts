export class Book {
    ISBN: string;
    titulo: string;
    precio: number;
    genero:string;
    descripcion: string;
    
    constructor(
        ISBN: string,
        titulo: string,
        precio: number,
        genero:string,
        descripcion: string,) {

    this.ISBN=ISBN;
    this.titulo=titulo;
    this.precio=precio;
    this.genero=genero;
    this.descripcion=descripcion;

    }
} 
