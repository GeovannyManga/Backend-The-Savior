import { getCartController } from "../controllers/carController.js";
import { errores } from "../controllers/errorController.js";


export const cartHandler = async (req, res) => {
    const { token } = req.query;
    try {
        const response = await getCartController(token);
        if (response) {
            res.send(response);
        } else {
            const errorHTML = errores(); 
            res.send(errorHTML);
        }
    } catch (error) {
        console.error(error);
    }
};
