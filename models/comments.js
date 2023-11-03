import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'hotel'
    },
    content: {
        type: String,
        required: true
    }
})

const commentModel = mongoose.model('comments', commentSchema)

export default commentModel