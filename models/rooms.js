import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({
    name: String,
    photo: String,
    country: String,
    state: Boolean,
    bookings: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "bookings"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "commets"
        }
    ]

});

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel