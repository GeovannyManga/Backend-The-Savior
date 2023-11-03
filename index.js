import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";



const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/",routes)

const PORT = 3000


app.listen(PORT, ()=>{
    console.log("este servidor se esta ejecutando en el puerto", PORT)
})