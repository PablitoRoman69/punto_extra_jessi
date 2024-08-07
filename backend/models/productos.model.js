import { Schema, model } from "mongoose";
export const Esquema2 = new Schema({
    nombre:{
        type: String
    },
    precio:{
        type: Number
    },
    tamaño:{
        type: String
    }
})

export const modelo3 = new model('Productos', Esquema2)