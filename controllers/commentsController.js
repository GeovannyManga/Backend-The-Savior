import comments from "../models/comments.js";
import user from "../models/users.js";
import hotels from "../models/hotels.js";

export const createCommentsController = async(author, to, message)=>{
    try {
        const create = await comments.create({
            author: author,
            to: to,
            content: message
        })

        const result = await create.save()
        if (result) {
            const usuario = await user.findById(author)
           usuario.comments.push(result._id)
           usuario.save()
           if (usuario) {
            const hotel = await hotels.findById(to)
            hotel.comments.push(result._id)
            hotel.save()
           }
        }


       return result



    } catch (error) {
        console.log(error)
    }

}