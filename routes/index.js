import { Router } from "express";
import { createUserHandler, searchUserHandler } from "../handlers/userHandlers.js";
import { createHotelHandler, searchHotelHandler, searchHotelByIdHandler } from "../handlers/hotelHandlers.js";
import { CreateBookingHandler, getUserBookingHandler } from "../handlers/bookingHandler.js";
import { commentsCreateHandlers, getAllCommentsHandler } from "../handlers/commentsHandlers.js";
import { createChatHandler } from "../handlers/chatHandlers.js";
import { cartHandler } from "../handlers/cartHandler.js";
import { createRoomsHandler, getAllRoomsHandler } from "../handlers/roomsHandlers.js";

const routes = Router()

// rutas post (deben ser independizadas para mejorar la arquitectura de las carpetas)

routes.post("/user", createUserHandler)

routes.post('/hotel', createHotelHandler)

routes.post("/booking", CreateBookingHandler)

routes.post("/comments", commentsCreateHandlers)

routes.post("/createChat", createChatHandler)

routes.post("/rooms", createRoomsHandler)

// rutas get (deben ser independizadas para mejorar la arquitectura de las carpetas)

routes.get("/cartUser", cartHandler)

routes.get("/getUser", searchUserHandler)

routes.get("/allComments",getAllCommentsHandler)

routes.get("/getAllRooms", getAllRoomsHandler)

routes.get("/getHotel", searchHotelHandler)

routes.get("/getUserBooking/:userId", getUserBookingHandler)

routes.get("/getHotelById/:id",searchHotelByIdHandler)



export default routes