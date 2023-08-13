import mongoose from "mongoose";
import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

const getAllblogs=async(req,res,next)=>{
    const blogs = await Blog.find();
try{
    if(blogs){
        res.status(201).json({blogs})
    }
    else{
        res.status(404).json({message:"No Blogs Found"})
    }
}
catch(err){
    console.log(`Error while getting blogs${err}`)
}}

const addBlog=async(req,res,next)=>{
    const {title,description,image,user}=req.body;
    let blog;
    try{
        const existingUser=await User.findById(user)
        if(existingUser){
            blog = new Blog({
                blogTitle:title,
                blogDescription:description,
                blogImage:image,
                blogUser:user
            })
            try{
                const session=await mongoose.startSession();
                session.startTransaction();
                await blog.save({session});
                existingUser.blogs.push(blog);
                await existingUser.save({session});
                await session.commitTransaction();
                res.status(200).json({message:"Blog Added"})
            }
            catch(err){
                console.log(`Cannot add Blog ${err}`)
            }
        }
        else{
            res.status(404).json({msg:"no user found"})
        }
     
    }
    catch(err){
        console.log(`Error While Adding A Blog ${err}`)
    }
}

const getBlogbyId=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const blog=await Blog.findById(id)
        if(blog){
            res.status(201).json({blog})
        }
        else{
            res.status(404).json({message:"No blog found"})
        }
    }
    catch(err){
        console.log(`Error while fetching blog ${err}`)
    }
}

const updateBlog=async(req,res,next)=>{
    const id = req.params.id;
    const{title,description}=req.body;
    let blog;
    try{
        blog=await Blog.findByIdAndUpdate(id,{
            blogTitle:title,
            blogDescription:description
        })
        if(blog){
            res.status(201).json({blog})
        }
        else{
            res.status(400).json({message:"cannot update"})
        }
    }
    catch(err){
        console.log(`cannot update blog ${err}`)
    }
}

const deleteBlog=async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try{
        blog=await Blog.findByIdAndRemove(id).populate('blogUser')
        await blog.blogUser.blogs.pull(blog);
        await blog.blogUser.save();
        if(blog){
        res.status(201).json({msg:"Blog Deleted"})
        }
        else{
            res.status(404).json({msg:"Unable to delete"})
        }
    }
    catch(err){
        console.log(`Error while deleting${err}`)
    }
}
const getUserBlogs=async(req,res,next)=>{
    const userId=req.params.id;
    let blog;
    try{
        blog=await User.findById(userId).populate('blogs');
        if(blog){
            return res.status(200).json({"user blogs":blog});
        }
        else{
            return res.status(404).json({message:"No Blogs Found"})
        }
    }
    catch(err){
        console.log(`Error fetching at user blog ${err}`)
    }
}

export {getAllblogs,addBlog,getBlogbyId,getUserBlogs,updateBlog,deleteBlog};