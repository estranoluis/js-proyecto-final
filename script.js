//Proyecto-Final-01
//Abrir consola para interactuar con el simulador
class producto {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const productos = []
productos.push(new producto(1,"Iphone 13", "256 GB", 1000000))
productos.push(new producto(2,"Samsung Galaxy S22", "128 GB", 800000))
productos.push(new producto(3,"Xiaomi 12", "128 GB", 700000))

class accesorio {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const accesorios = []
accesorios.push(new accesorio(4,"Computador Ryzen 7", "HP", 1200000))
accesorios.push(new accesorio(5,"Laptop i7", "Asus", 2000000))
accesorios.push(new accesorio(5,"Laptop i5", "Acer", 2100000))

class proteccion {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const protecciones = []
protecciones.push(new proteccion(6,"Audifonos", "Hyper X", 100000))
protecciones.push(new proteccion(7,"Mouse", "Razer", 80000))
protecciones.push(new proteccion(7,"Case", "Original", 30000))

const carrito = []

alert("Hola, Bienvenido a TecnoShop")

let seleccion = prompt("Desea ordenar algun producto el dia de hoy? \n Si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Desea ordenar algo, \n Si o no")
}

if(seleccion == "si") {
    alert("A continuación nuestros productos, puedes seleccionarlos por nombre o ID");
    let seccionProductos = productos.map((orden) => orden.id + " - " + orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionAccesorios = accesorios.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    let seccionProtecciones = protecciones.map((orden) =>  orden.id + " - " +  orden.nombre + " - " + orden.descripcion + "\n" + "Precio: " + orden.precio + "$");

    alert("Móviles \n" + seccionProductos.join("\n") + "\n" + "\nPC \n" + seccionAccesorios.join("\n") + "\n" + "\nAccesorios \n" + seccionProtecciones.join("\n"));

    console.log("Móviles \n" + seccionProductos.join("\n") + "\n" + "\nPC \n" + seccionAccesorios.join("\n") + "\n" + "\nAccesorios \n" + seccionProtecciones.join("\n"));

} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!")
}

const orden = Array.prototype.concat(productos, accesorios, protecciones)

while(seleccion = "si" && seleccion != "no") {
    let prod = prompt("Agrega un producto a tu carrito").toUpperCase()
    let precio = 0
    
    for(const i in orden) {
        if(prod == orden[i].nombre || prod == orden[i].id) {
            precio = Number(orden[i].precio)
        } //else{
        // alert("Ingrese nombre o ID válidos") 
        // prod = prompt("Agrega un producto a tu carrito").toUpperCase()
    }

    let unidades = Number(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({prod, unidades, precio})
    
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion == "") {
        alert('Debe responder si o no')
        seleccion = prompt("Desea seguir comprando?")
    }

    while(seleccion === "no") {
        alert("Gracias por la compra, Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            alert(`Producto: ${carritoFinal.prod},\nUnidades: ${carritoFinal.unidades},\nTotal a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
            console.log(`Producto: ${carritoFinal.prod}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    } if (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingresa si o no")
        seleccion = prompt("Desea seguir comprando?")
    }
}

const total = carrito.reduce((a, b) => a + b.precio * b.unidades, 0)
const iva = total * 0.19
alert(`El total a pagar con IVA por su compra es: $${total+iva}`)
console.log(`El total a pagar con IVA por su compra es: $${total+iva}`)



