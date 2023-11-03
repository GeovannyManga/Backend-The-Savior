import user from "../models/users.js";


export const checkUserExistence = async(token) => {
    try {
       const search = await user.findOne({token: token})
       if (search) {
           return true
       }else{
        return false
       }
    } catch (error) {

    }
}