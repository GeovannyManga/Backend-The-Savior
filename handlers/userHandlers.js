import { checkUserExistence, create } from "../controllers/userController.js";

export const createUser = async (req, res) => {
    const { name, photo, age, country, token } = req.body
    try {

        const response = await checkUserExistence(token)

       if (response) {
        res.send("lo siento amigo, este usuario ya existe")
       }else{
        const usuario ={
            name: name,
            photo: photo,
            age: age,
            country: country,
            token: token
        }
        const responseUser = await create(usuario)
        res.send(responseUser)

     }
       
      
    } catch (error) {
        console.error(error)

    }
}
