// desafio clases --> realizar una clase ProductManager que gestione un conjunto de productos.
// debe crearse desde su constructor con un elemento products que es un array vacio
// cada producto que gestione dicho array tiene que tener propiedades(title,description,price,thumbnail,code,stock)
// Metodos: 
// addProducts --> al agregar un producto al array (el agregarlo tiene que crearse un id que se incremente, validar que no se repita el id del producto)
// getProducts --> devolver el array con todos los productos
// getProductById --> buscar en el array con find un id, si lo encuentra devuelve el producto sino tira "Not found"


class ProductManager {
    static counter = 0 // declaro contador de manera static (global)
    static product = []; // declaro product como array vacio de manera static (global)
    constructor(title, description, price, thumbnail, stock) {
        this.product = [];
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock
        this.code = ProductManager.counter += 1; // redefino valor de counter como id para que sea mas facil de interpretar 
    }

    addProducts() { // metodo para pushear todos los campos dentro del array vacio product + id autoincrementado + validacion de no repetir id + validacion campos empty
        this.id + 1;
        let idAsignado = this.product.find((product) => product.id === id)
        if (this.title.length === 0 || this.description.length === 0 || this.price.length === 0 || this.thumbnail.length === 0 || this.stock.length === 0) {
            return ('es necesario llenar todos los campos')
        } if (idAsignado) {
            console.log('el id se repite');
        } else {
            return this.product.push(this.title, this.description, this.price, this.thumbnail, this.stock)
                && ProductManager.product.push(this.title, this.description, this.price, this.thumbnail, this.stock)
        }

    }

    getProducts() { // retono los productos que pushee en el array static global y los muestro
        return [...ProductManager.product] // utilizo spread operator para retornar lo que contiene el array
    }


    getProductsById(id) { // utilizo find para que me retorne el producto segun el id 
        return this.product.find(product => product.id === id);
    }

}

const productoUno = new ProductManager('Nombre: Kimono Atama', 'Descripcion: A1 negro', 27000, 'thumbnail', 20)
console.log(productoUno.addProducts(), productoUno.getProducts(), productoUno.getProductsById());


const productoDos = new ProductManager('Nombre: Kimono shoyoroll', 'Descripcion: A1 negro', 100000, 'thumbnail', 30)
console.log(productoDos.addProducts(), productoDos.getProducts(), productoDos.getProductsById());