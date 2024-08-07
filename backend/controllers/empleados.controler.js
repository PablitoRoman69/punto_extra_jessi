import { modelo1 } from "../models/empleados.model.js";

export const testEmpleados =() =>{
    console.log('Si funciona la de empleados')
}

modelo1.create({
    nombre:"Pablo",
    apePat:"Román",
    apeMat:"Rodríguez",
    edad: 21
})