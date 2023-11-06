
import {createBooking} from "../controllers/bookingController.js";



export const handlerCreateBooking = async(req, res)=>{
    const {userId,roomId, dateCheckount} = req.body
    const date = new Date(dateCheckount)
    try {
        const booking = {
            userId: userId,
            roomId: roomId,
            dateCheckount: date,
    
        }

        const response = await createBooking(booking)
        return response

        
    } catch (error) {
        console.log(error)
    }
}









