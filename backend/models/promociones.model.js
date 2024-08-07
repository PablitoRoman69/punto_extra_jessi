import { Schema, model } from "mongoose";
export const Esquema3 = new Schema({
    mes:{
        type: String
    },
    año:{
        type: Number
    },
    saldo:{
        type: Number
    }
})
export const modelo5 = new model('Promociones', Esquema3)