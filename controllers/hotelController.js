import hotels from "../models/hotels.js";


export const checkHotelExistence = async (token) => {
    try {
        const search = await hotels.findOne({ token: token })
        if (search) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export const createHotels = async (info) => {
    try {
        const hotel = await hotels.create({
            name: info.name,
            photo: info.photo,
            token: info.token,
            state: true,
            bookings: [],
            location: info.location,
            chats: [],
            coments: []
        })

        return await hotel.save()

    } catch (error) {
        console.log(error)
    }
}


export const searcherHotel = async(token)=>{
    try {
        const finder = await hotels.findOne({token: token})
        if (finder) {
          const result = finder.toObject()
          delete result.token
          return result
        }
    } catch (error) {
        console.error(error);
    }
}

export const searcherHotelById = async(id)=>{
    try {
        const finder = await hotels.findById(id)
        if (finder) {
          const result = finder.toObject()
          delete result.token
          return result
        }
    } catch (error) {
        console.error(error);
    }
}

