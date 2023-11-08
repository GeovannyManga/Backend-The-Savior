import { createChatController } from "../controllers/chatController.js";



export const createChatHandler = async(req, res)=>{
    const {userId, hotelId} = req.body
try {
    const create = await createChatController(userId, hotelId)
    res.send(create)
} catch (error) {
    console.error(error);
}
}