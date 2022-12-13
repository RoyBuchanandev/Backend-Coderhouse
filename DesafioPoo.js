class ProductManager {
    static counter = 0 // declaro contador de manera static (global)
    constructor(title, description, price, thumbnail, code, stock) {
        this.product = [];
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock
        this.code = code;
        this.id = ProductManager.counter += 1; // redefino valor de counter como id para que sea mas facil de interpretar 
    }

    addProducts() { // metodo para pushear todos los campos dentro del array vacio product + id autoincrementado + validacion de no repetir id 
        this.id + 1;
        if (this.title !== undefined || this.description !== undefined || this.price !== undefined || this.thumbnail !== undefined || this.code !== undefined || this.stock !== undefined) {
            return this.product.push(this.title, this.description, this.price, this.thumbnail, this.stock)
        } else if ((this.product.find(p => p.id === product.id))) {
            throw new Error('El código del producto ya existe')
        } else {
            throw new Error('Todos los campos son obligatorios');
        }
    }


    getProducts() { // retono los productos que pushee en el array static global y los muestro
        return [...this.product] // utilizo spread operator para retornar lo que contiene el array
    }


    getProductsById(id) { // utilizo find para que me retorne el producto segun el id 
        return this.product.find(product => product.id === id);
    }

}

// Instanciamos la clase
const productManager = new ProductManager(
    "Kimono kingz", // Título del producto
    "A1 negro", // Descripción del producto
    100.0, // Precio del producto
    "Kimonokingz.jpg", // Ruta de la imagen del producto
    "43564", // Código identificador del producto
    5 // Número de piezas disponibles
);