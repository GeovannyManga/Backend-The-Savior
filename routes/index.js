import {Router} from "express";

const routes = Router()

const loco = (req, res)=>{
    res.send("<h1>hola</h1>")
}
routes.get("/", loco)



export default routes