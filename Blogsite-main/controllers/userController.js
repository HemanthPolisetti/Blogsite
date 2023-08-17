import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
const getAllUsers=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
        if(users){
            res.status(200).json({users})
        }
        else{
            res.status(400).json({"message":"No users found"})
        }
    }
    catch(err){
        console.log("Error while finding users"+err)
    }
}

const getUser=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id)
        if(user){
            res.status(200).json({user})
        }
        else{
            res.status(404).json({message:"User Not Found"})
        }
    }
    catch(err){
        console.log(`Err while fetching user${err}`)
    }
}

const userSignup=async(req,res,next)=>{
    const {name,email,password}=req.body;
    //check for existing email or name in db and match password with hashed one stored in database
    try{
        const existingUser=await User.findOne({email})
        if(!existingUser){
            const hashPassword=bcrypt.hashSync(password)
            const user = new User({
                userName:name,
                userEmail:email,
                userPassword:hashPassword,
                blogs:[]
            })
            try{
               
                user.save();
                res.status(201).json({user})
            }
            catch(err){
                console.log("Cannot Create User"+err)
            }
        }
        else{
            res.status(404).json({message:"User Already Exists Please do Login"})
        }
    }
    catch(err){
        console.log("Error While Signup"+err)
    }
}

const userLogin=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({userEmail:email})
        if(user){
            const isPassword = bcrypt.compareSync(password,user.userPassword)
            if(!isPassword){
                res.status(400).json({message:'Incorrect Password'})
            }
            else{
                res.status(200).json({user})
            }
        }
        else{
            res.status(404).json({message:"User Not Found,Please do Signup"})
        }
    }
    catch(err){
        console.log("Error While Login"+err)    
    }
}

export {getAllUsers,getUser,userSignup,userLogin};