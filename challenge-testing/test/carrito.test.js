const {CarritoCompra} = require("./index");


describe('Dentro de la clase CarritoCompra', ()=> {
    let carritoCompra;  

    beforeEach(()=> {
        carritoCompra = new CarritoCompra();
    })

    describe('Verificando la clase', () => {
        it ('Sobre el constructor de CarritoCompra', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it ('carritoCompra debería ser una instancia', () => {
            expect(carritoCompra).toBeInstanceOf(CarritoCompra);
        })

        it ('Debería ser una lista', () => {
            expect(carritoCompra.productos).toEqual([]);
        })
    })

    describe('Verificando los metodos', () => {
        const producto1 = {
            nombre: "Producto #1",
            precio: 100,
            porcentaje: 1,
        }

        const producto2 = {
            nombre: "Producto #2",
            precio: 500,
            porcentaje: 5,
        }

        const producto3 = {
            nombre: "Producto #3",
            precio: 1000,
            porcentaje: 10,
        }

        it('Debería tener el metodo agregarProducto', () => {
            expect(CarritoCompra.prototype).toHaveProperty("agregarProducto");
        })

        
        it('Debería tener el metodo calcularTotal', () => {
            expect(CarritoCompra.prototype).toHaveProperty("calcularTotal");
        })

        
        it('Debería tener el metodo calcularDescuento', () => {
            expect(CarritoCompra.prototype).toHaveProperty("calcularDescuento");
        })

        it('Debería tener los tres elementos agregados', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            carritoCompra.agregarProducto(producto3);

            expect(carritoCompra.productos).toContain(producto1);
            expect(carritoCompra.productos).toContain(producto2);
            expect(carritoCompra.productos).toContain(producto3);   
        })

        it('Verificando el metodo calcularTotal', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            carritoCompra.agregarProducto(producto3);

            const total = carritoCompra.calcularTotal();
            const subTotal = producto1.precio + producto2.precio + producto3.precio;

            console.log(producto1.precio)

            expect(subTotal).toBe(total);
        }) 

        it('Verificando el metodo calcularDescuento', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            carritoCompra.agregarProducto(producto3);

            const subTotal = producto1.precio + producto2.precio + producto3.precio;
            const descuento = 15;

            const totalExpect = subTotal - (subTotal * (descuento/100));

            const total = carritoCompra.calcularDescuento(descuento);

            expect(totalExpect).toBe(total);
        }) 
    })
}) 
