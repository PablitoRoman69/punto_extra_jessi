import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { testEmpleados } from "./backend/controllers/empleados.controler.js";
import { testGerentes } from "./backend/controllers/gerentes.controler.js";
import { testProductos } from "./backend/controllers/productos.controler.js";
import { testProductosFalt } from "./backend/controllers/productosfaltantes.controler.js";
import { testPromociones } from "./backend/controllers/promociones.controler.js";
import { testDescuentos } from "./backend/controllers/descuentos.controler.js";

//conecto mi base
dotenv.config();
mongoose.connect(process.env.base) // aqui estoy haciendo la conexión a la base de datos en el .env
.then (()=> {
    console.log("Sifunciona la base de datos")
})
.catch ((error)=> {
    console.log("No funciona la base de datos")
})

//Hago mi servidor
const app =express();
app.use (cors());     //creando el servidor

app.listen(4000,()=>{
       console.log("Funciona mi servidor")     //escuchando mi servidor
})

testGerentes()
testEmpleados()
testProductos()
testProductosFalt()
testPromociones()
testDescuentos()

