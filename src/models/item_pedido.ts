export class order_item {
    id_item_pedido: number;
    libro: string;
    cantidad: number;
    precio_unitario:number;
    precio_total: number;
    
    constructor(
        id_item_pedido: number,
        libro: string,
        cantidad: number,
        precio_unitario:number,
        precio_total: number,) {

    this.id_item_pedido=id_item_pedido;
    this.libro=libro;
    this.cantidad=cantidad;
    this.precio_unitario=precio_unitario;
    this.precio_total=precio_total;

    }
} 