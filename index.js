import express from "express";

const app = express()

const PORT = 3000


app.listen(PORT, ()=>{
    console.log("este servidor se esta ejecutando en el puerto", PORT)
})