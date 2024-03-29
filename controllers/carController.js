import mongoose from "mongoose";
import cart from "../models/shoppingCart.js";
import user from "../models/users.js";



export const createCartController = async (userId) => {
    try {
        const createCart = await cart.create({
            userId: userId,
            content: []
        });
        const car = await createCart.save();

        // Asigna directamente el _id del carrito al campo shoppingCart del usuario
        const users = await user.findOne({ _id: userId });
        users.shoppingCart = car._id;
        await users.save();

        return createCart;
    } catch (error) {
        console.log(error);
    }
}


export const getCartController = async(tok)=>{
    try {
        const findToken = await user.findOne({token: tok})
        if (findToken) {
           const cartSearch = await cart.findOne({userId: findToken._id})
           return cartSearch
        }
    } catch (error) {
        console.error(error)
    }
}
