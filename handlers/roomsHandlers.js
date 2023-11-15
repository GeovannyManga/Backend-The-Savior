import { createRoomsController, getAllRoomsController} from "../controllers/roomsController.js";


export const createRoomsHandler = async(req, res)=>{
    const {token, name, photo, hotel} = req.body
    try {
        const create = await createRoomsController(token, name, photo, hotel)
        if (create) {
            res.send(create)
        }
    } catch (error) {
        console.error(error);
    }
}


export const getAllRoomsHandler = async(req, res)=>{
    try {
        const response = await getAllRoomsController()
        res.send(response)
    } catch (error) {
        console.error(error);
    }
}