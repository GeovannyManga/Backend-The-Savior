import mongoose from "mongoose";
import { Schema } from "mongoose";


const contentModel = new Schema({
    name: String,
    unitePrice: Number,
    totalPrice: Number
})

const shoppingCart = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    content: [contentModel]

})

const shoppingCartModel = mongoose.model('shoppingCart', shoppingCart)

export default shoppingCartModel