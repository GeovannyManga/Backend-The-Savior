import { checkUserExistence } from "../controllers/userController.js";

export const createUser = async(req, res) => {
    try {
        const {token} = req.query
        const response = checkUserExistence(token)
        
    } catch (error) {
        
    }
}
