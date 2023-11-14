import mongoose from "mongoose";
import { Schema } from "mongoose";


const locationSchema = new Schema({
    latitude: Number,
    longitude: Number
})



const hotelSchema = new Schema({
    name: String,
    photo: String,
    token: String,
    state: Boolean,
    bookings: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'bookings'
        }
    ],
    location: locationSchema,
    chats: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'chats'
        }
    ],
    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: 'commets'
    }],
    rooms: [{
        type: mongoose.Schema.ObjectId,
        ref: 'rooms'
    }]
})

const hotelModel = mongoose.model('hotels', hotelSchema)

export default hotelModel