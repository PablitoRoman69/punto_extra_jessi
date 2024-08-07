import { modelo3 } from "../models/productos.model.js";

export const testProductos =()=>{
    console.log('Si funciona la de productos')
}

modelo3.create({
    nombre:"COCA",
    precio: 25,
    tamaño:"Grande"
})