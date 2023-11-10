import { createChatController } from "../controllers/chatController.js";



export const createChatHandler = async(req, res)=>{
    const {user, hotel} = req.body
try {
    const create = await createChatController(user, hotel)
    res.send(create)
} catch (error) {
    console.error(error);
}
}