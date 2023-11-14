import comments from "../models/comments.js";
import user from "../models/users.js";
import hotels from "../models/hotels.js";

export const createCommentsController = async (author, to, message) => {
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

export const checkExistenceCommentsController = async(token)=>{
try {
    const search = await user.findOne({token: token})
    if (search) {
        return true
    }else{
        return false
    }
    
} catch (error) {
    console.error(error)
}
}

export const getAllCommentsController = async (token) => {
    console.log(token);
    try {
        const search = await user.findOne({ token: token });
        if (search) {
            const arrComments = search.comments;
            
            const promises = arrComments.map(async (c) => {
                const response = await comments.findById(c);
                return response;
            });

            const commentsData = await Promise.all(promises);

            console.log(commentsData);

            return commentsData;
        } else {
            console.log('Usuario no encontrado');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los comentarios');
    }
};
