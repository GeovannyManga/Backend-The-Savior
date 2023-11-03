import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const routes = Router()


routes.get("/", createUser)



export default routes