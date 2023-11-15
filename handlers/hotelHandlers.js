import { checkHotelExistence, createHotels } from "../controllers/hotelController.js";


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
res.send("asi es funciona")
}