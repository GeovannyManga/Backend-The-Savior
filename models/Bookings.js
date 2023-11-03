import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingsSchema = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    roomId: {
        type: mongoose.Schema.ObjectId,
        ref: 'rooms'
    },
    dateCheckount: date,
    state: Boolean
})

const bookingsModel = mongoose.model('bookings', bookingsSchema)

export default bookingsModel