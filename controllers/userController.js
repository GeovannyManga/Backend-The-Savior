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

export const create = async(info)=>{
    try {
        const usuario = await user.create({
            name: info.name,
            photo: info.photo,
            age: info.age,
            country: info.country,
            token: info.token,
            state: info.state,
            shoppingCart: [],
            shopping: [],
            chats: [],
            Comments: []
        })
        

         return await usuario.save()


        
    } catch (error) {
        console.log(error)
    }
}

