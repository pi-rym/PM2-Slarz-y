class CarritoCompra {
    constructor () {
        this.productos = [];
    }

    agregarProducto (product) {
        if(typeof product != "object") return null;
        if (typeof product.nombre != "string" || typeof product.precio != "number" || typeof product.porcentaje != "number") return null;

        this.productos.push(product);
    }

    calcularTotal() {
        let total = 0;

        for (const item of this.productos) total += item.precio; 
        
        return total;
    }

    calcularDescuento (porcentaje) {
        let subtotal = this.calcularTotal();
        let descuento = this.calcularTotal() * (porcentaje / 100); 
        
        return subtotal - descuento;
    }
}

module.exports = { CarritoCompra }









/*

class Productos {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let insProducto = new Productos ('Producto', 100);
let insCarritoCompra = new CarritoCompra ();

module.exports = {
    calcularTotal
};

*/