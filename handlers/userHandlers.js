import { checkUserExistence } from "../controllers/userController.js";

export const createUser = async (req, res) => {
    const { token } = req.query
    try {

        const response = await checkUserExistence(token)

       if (response) {
        console.log("el resultado fue positivo")
       }else{
        console.log("el resultado fue negativo")
       }
    } catch (error) {

    }
}
