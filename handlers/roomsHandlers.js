import { createRoomsController} from "../controllers/roomsController.js";



export const createRoomsHandler = async(req, res)=>{
    const {token, name, photo, hotel} = req.body
    console.log(token, name, photo, hotel)
    try {
        const create = createRoomsController(token, name, photo, hotel)
        res.send(create)
    } catch (error) {
        console.error(error);
    }
}