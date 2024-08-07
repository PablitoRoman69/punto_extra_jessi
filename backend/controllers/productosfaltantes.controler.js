import { modelo4 } from "../models/productosfaltantes.model.js";

export const testProductosFalt =() =>{
    console.log('Si funciona la de Productos que faltan')
}
modelo4.create({
    nombre:"Galletas",
    precio: 20,
    tamaño:"Medianas"
})