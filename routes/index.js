import { Router } from "express";
import { createUser } from "../handlers/userHandlers.js";

const routes = Router()


routes.post("/create", createUser)



export default routes