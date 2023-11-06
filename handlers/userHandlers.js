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
            console.log("responseUser._id:", responseUser);


            if (responseUser && responseUser._id) {
                const cartCreationResponse = await createCartController(responseUser._id);
                if (cartCreationResponse) {
                    console.log(responseUser);
                    res.send(responseUser);
                } else {
                    console.error("Error creating shopping cart");
                    res.status(500).send("Error creating shopping cart");
                }
            } else {
                console.error("Error creating user");
                res.status(500).send("Error creating user");
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
