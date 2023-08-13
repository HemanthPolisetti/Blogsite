import mongoose from 'mongoose';

//EOBBumCwUrH27f5p

const Schema = mongoose.Schema;

const userSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
        minlength:8
    },
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:'Blog',
        required:true
    }]
})

export default mongoose.model("User",userSchema)