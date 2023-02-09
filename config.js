import dotenv from "dotenv"
import path from "path"
// dotenv.config()
//se puede hacer con dotenv.config

dotenv.config({
    path:
    process.env.NODE_ENV === "prod"
    ?"test.env"
    :"prod.env"
})


export const FONDO = process.env.FONDO
export const FRENTE = process.env.FRENTE