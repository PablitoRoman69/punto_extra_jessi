import {Schema, model} from 'mongoose'

export const Esquema1 = new Schema({
    nombre:{
        type: String
    },
    apePat:{
        type: String
    },
    apeMat:{
        type: String
    },
    edad:{
        type: Number
    }
})

export const modelo1 = new model('Empleados', Esquema1)