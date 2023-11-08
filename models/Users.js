import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    photo: String,
    age: Number,
    country: String,
    token: String,
    state: Boolean,
    shoppingCart:  {
        type: mongoose.Schema.ObjectId,
        ref: "shoppingCart"
    },
    shopping: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "bookings"
        }
    ],
    chats: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "chats"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "commets"
        }
    ]

});

const userModel = mongoose.model('Users', userSchema)

export default userModel