import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        enum: ['users', 'hotels']
    },
    content: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
}
)


const chatSchema = new Schema({
    hotel: mongoose.Schema.ObjectId,
    user: mongoose.Schema.ObjectId,
    messages: [messageSchema]
})

const chatModel = mongoose.model('chats', chatSchema)

export default chatModel