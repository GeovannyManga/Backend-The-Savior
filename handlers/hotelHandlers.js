import { errores } from "../controllers/errorController.js";
import { checkHotelExistence, createHotels, searcherHotel,  searcherHotelById } from "../controllers/hotelController.js";


export const createHotelHandler = async (req, res) => {
    const { name, photo, token, location } = req.body
    try {
        const checkToken = await checkHotelExistence(token)
        if (checkToken) {
            res.send('this hotel exist')
        } else {
            const hotel = {
                name: name,
                photo: photo,
                token: token,
                location: location,
                state: true,
                booking: [],
                chats: [],
                comments: []
            }
            const response = await createHotels(hotel)
            res.send(response)
        }

    } catch (error) {
        console.log(error)
    }
}

export const searchHotelHandler = async(req, res)=>{
    const {token} = req.query
try {
    const check = await checkHotelExistence(token)
    if (check) {
        const response = await searcherHotel(token)
        res.send(response)
    }else{
        res.send(errores())
    }
    
} catch (error) {
    console.error(error);
}
}


export const searchHotelByIdHandler = async(req, res)=>{
    const {id} = req.params
try {
   
        const response = await searcherHotelById(id)
        res.send(response)
    
} catch (error) {
    console.error(error);
}
}
