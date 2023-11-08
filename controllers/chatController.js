import chats from "../models/chats.js";
import hotels from "../models/hotels.js";
import users from "../models/users.js";

export const createChatController = async (user, hotel) => {

    try {
        
        const createChat = await chats.create({
            hotel: hotel,
            user: user,
            messages: []
        })
        const checkCreate = await createChat.save()
        if (checkCreate) {
            const us = await users.findById(user)
            us.chats.push(checkCreate._id)
            const resultUs = await us.save()
            if (resultUs) {
                const hotl = await hotels.findById(hotel)
                hotl.chats.push(checkCreate._id)
                const resulthotl = await us.save()
                console.log(resultUs, resulthotl, "todo salio segun lo planeado")
            }
            
        }
        
        return checkCreate
        
    } catch (error) {
        console.error(error);
    }
        
    }
    
    export const addMessageController = async (message) => {
        
    }

