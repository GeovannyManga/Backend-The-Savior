import { Router } from "express";
import { createUserHandler, searchUserHandler } from "../handlers/userHandlers.js";
import { createHotelHandler } from "../handlers/hotelHandlers.js";
import { CreateBookingHandler } from "../handlers/bookingHandler.js";
import { commentsCreateHandlers, getAllCommentsHandler } from "../handlers/commentsHandlers.js";
import { createChatHandler } from "../handlers/chatHandlers.js";
import { cartHandler } from "../handlers/cartHandler.js";

const routes = Router()

// rutas post (deben ser independizadas para mejorar la arquitectura de las carpetas)

routes.post("/user", createUserHandler)

routes.post('/hotel', createHotelHandler)

routes.post("/booking", CreateBookingHandler)

routes.post("/comments", commentsCreateHandlers)

routes.post("/createChat", createChatHandler)

// rutas get (deben ser independizadas para mejorar la arquitectura de las carpetas)

routes.get("/user", searchUserHandler)

routes.get("/cartUser", cartHandler)

routes.get("/allComments",getAllCommentsHandler )


export default routes