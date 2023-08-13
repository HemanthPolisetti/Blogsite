import mongoose from "mongoose";

const connectdb=()=>{
    const uri="mongodb+srv://hemanthpolisetti:EOBBumCwUrH27f5p@cluster2.hbsesib.mongodb.net/blogsite?retryWrites=true&w=majority"
    try{
        const conn=mongoose.connect(uri)
        console.log("Mongodb Connected")
    }
    catch(err){
        console.log("Error connecting to mongodb"+err)
    }
}

export default connectdb;