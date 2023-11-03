import user from "../models/users.js";


export const checkUserExistence = async(token) => {
    try {
       const search = await user.findOne({token: token})
       if (search) {
           console.log(search)
       }else{
        console.log("este usuario no existe y puede continuar con su autenticacion")
       }
    } catch (error) {

    }
}