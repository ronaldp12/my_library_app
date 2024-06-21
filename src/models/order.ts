export class Order {
    id_pedido: number;
    fecha_pedido: Date;
    cliente: string;
    items_pedido:number;
    estado_pedido: string;
    total_pedido: number;
    
    constructor(
        id_pedido: number,
        fecha_pedido: Date,
        cliente: string,
        items_pedido:number,
        estado_pedido: string,
        total_pedido: number,) {

    this.id_pedido=id_pedido;
    this.fecha_pedido=fecha_pedido;
    this.cliente=cliente;
    this.items_pedido=items_pedido;
    this.estado_pedido=estado_pedido;
    this.total_pedido=total_pedido;

    }
} 
