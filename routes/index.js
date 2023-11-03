import { Router } from "express";
import { createUser } from "../handlers/userHandlers.js";

const routes = Router()


routes.get("/", createUser)



export default routes