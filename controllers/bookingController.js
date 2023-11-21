import bookings from "../models/bookings.js";
import users from "../models/users.js";
import hotels from "../models/hotels.js";


export const createBooking = async (data) => {
    try {



        const response = await bookings.create({
            userId: data.userId,
            roomId: data.roomId,
            dateCheckount: data.dateCheckount,
            state: true
        })
        const result = await response.save()
        const user = await users.findOne({ _id: data.userId });

        if (user) {
            user.shopping.push(result._id);
            await user.save();
        } else {
            console.log('Usuario no encontrado');
        }

        const hotel = await hotels.findOne({ _id: data.roomId });

        if (hotel) {
            hotel.bookings.push(result._id);
            await hotel.save();
        } else {
            console.log('Hotel no encontrado');
        }
    } catch (error) {
        console.log(error)
    }

}


export const getUserBooking = ()=>{
    try {
        
    } catch (error) {
        console.error(error);
    }
}