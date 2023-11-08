import { Router } from "express";
import { createUser } from "../handlers/userHandlers.js";
import { createHotel } from "../handlers/hotelHandlers.js";
import { handlerCreateBooking } from "../handlers/bookingHandler.js";
import { commentsCreateHandlers } from "../handlers/commentsHandlers.js";
import { createChatHandler } from "../handlers/chatHandlers.js";

const routes = Router()


routes.post("/create", createUser)

routes.post('/hotel', createHotel)

routes.post("/booking", handlerCreateBooking)

routes.post("/comments", commentsCreateHandlers)

routes.get("/createChat", createChatHandler)



export default routes