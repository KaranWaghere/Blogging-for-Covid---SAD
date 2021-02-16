import mongoose from 'mongoose'
import Comments from "./mongoComments.js"

const postModel = mongoose.Schema({
    user:String,
    imgName:String,
    text:String,
    avatar:String,
    timestamp:String, 
    likes: { type: Number , default: 0 , min: 0},
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comments"
        }
    ]
    
})

export default mongoose.model('posts',postModel)
