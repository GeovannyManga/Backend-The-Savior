import { createCommentsController } from "../controllers/commentsController.js";


export const commentsCreateHandlers = async(req, res)=>{
    const {author, to, content} = req.body
    try {
        const create = await createCommentsController(author, to, content)
        res.send(create)
    } catch (error) {
        console.log(error)
    }
}