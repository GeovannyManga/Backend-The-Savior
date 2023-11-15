
import roomsSchema from "../models/rooms.js";
import hotelSchema from "../models/hotels.js";


export const createRoomsController = async(token, name, photo, hotel)=>{
    try {
        const room = await roomsSchema.create({
            name: name,
            photo: photo,
            hotel: hotel,
            state: true,
            bookings: [],
            comments: []

        })
        const roomSaved = await room.save()
       if (roomSaved) {
        const hotel = await hotelSchema.findOne({token: token})
        if (hotel) {
             hotel.rooms.push(roomSaved._id)
           const response = await hotel.save()
           return response
        }
       }else{
        return "error al intentar guardar la habitacion"
       }

    } catch (error) {
        console.error(error);
    }
}