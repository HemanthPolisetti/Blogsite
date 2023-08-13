import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema=new Schema({
    blogTitle:{
        type:String,
        required:true
    },
    blogDescription:{
        type:String,
        required:true
    },
    blogImage:{
        type:String
    },
    blogUser:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }
})

export default mongoose.model('Blog',blogSchema)