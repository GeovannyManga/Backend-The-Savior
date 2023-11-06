import { Router } from "express";
import { createUser } from "../handlers/userHandlers.js";
import { createHotel } from "../handlers/hotelHandlers.js";
import { handlerCreateBooking } from "../handlers/bookingHandler.js";

const routes = Router()


routes.post("/create", createUser)

routes.post('/hotel', createHotel)

routes.post("/booking", handlerCreateBooking)



export default routes