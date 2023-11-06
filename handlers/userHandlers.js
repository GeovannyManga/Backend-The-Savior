import { checkUserExistence, create } from "../controllers/userController.js";
import { createCartController } from "../controllers/carController.js";

export const createUser = async (req, res) => {
    const { name, photo, age, country, token } = req.body;
    try {
        const response = await checkUserExistence(token);

        if (response) {
            res.send("This user already exists");
        } else {
            const usuario = {
                name: name,
                photo: photo,
                age: age,
                country: country,
                token: token,
                state: true,
            };
            const responseUser = await create(usuario);



            if (responseUser && responseUser._id) {
                const cartCreationResponse = await createCartController(responseUser._id);
                if (cartCreationResponse) {
                    res.send(responseUser);
                } else {
                    res.status(500).send("Error creating shopping cart");
                }
            } else {
                res.status(500).send("Error creating user");
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
