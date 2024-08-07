import { modelo6 } from "../models/descuentos.model.js";

export const testDescuentos =() => {
    console.log('Si funciona lade descuentos')
}
modelo6.create({
    mes:"Junio",
    año: 2023,
    saldo: 85
})