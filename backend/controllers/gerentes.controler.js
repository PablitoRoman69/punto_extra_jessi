import { modelo2 } from "../models/gerentes.model.js";

export const testGerentes =() =>{
    console.log('Si funcion la de gerentes')
}

modelo2.create({
    nombre: "Camila",
    apePat: "Avilés",
    apeMat: "Vargas",
    edad: 20
})