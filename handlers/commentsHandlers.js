import { checkExistenceCommentsController, createCommentsController, getAllCommentsController } from "../controllers/commentsController.js";
import { errores } from "../controllers/errorController.js";


export const commentsCreateHandlers = async(req, res)=>{
    const {author, to, content} = req.body
    try {
        const create = await createCommentsController(author, to, content)
        res.send(create)
    } catch (error) {
        console.log(error)
    }
}

export const getAllCommentsHandler = async(req, res)=>{
    const {token}= req.query
    console.log(token)
    try {
        const check = await checkExistenceCommentsController(token);
        if (check) {
            const response = await getAllCommentsController(token)
            res.send(response)
        } else {
            res.send(errores())
        }
        
    } catch (error) {
        console.error(error)
    }
}
