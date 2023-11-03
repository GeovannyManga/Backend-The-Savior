import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    photo: String,
    edad: Number,
    country: String,
    shoppingCart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "bookings"
        }
    ],
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
    Comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "commets"
        }
    ]

});

const userModel = mongoose.model('Users', userSchema)

export default userModel