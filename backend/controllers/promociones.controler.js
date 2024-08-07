import { modelo5 } from "../models/promociones.model.js";

export const testPromociones =() =>{
    console.log('Si funciona la de promociones')
}
modelo5.create({
    mes:"febrero",
    año: 2024,
    saldo: 55
})