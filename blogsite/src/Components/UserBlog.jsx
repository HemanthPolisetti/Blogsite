import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NavBar from './NavBar'
const UserBlog = () => {
    const uid =  localStorage.getItem("userId")
    const [blogs,setBlogs]=useState()
    const userBlogs=async()=>{
        const res=await axios.get(`http://localhost:5000/api/blog/user/${uid}`)
        const data=res.data
        setBlogs(data.blog.blogs)
    }
    console.log(blogs)
useEffect(()=>{
    userBlogs();
},[])
  return (
<div>
<NavBar />
    {blogs && blogs.map((blog)=>(
    <div className=' flex justify-center items-center pt-2'>
    <Card className="py-4 w-2/4 h-2/12">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{blog.blogUser}</p>
      <small className="text-default-500">{blog.blogTitle}</small>
      <h4 className="font-bold text-large">{blog.blogDescription}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={blog.blogImage}
        width={270}
      />
    </CardBody>
  </Card>
  </div>
  ))}
</div>
  )
}

export default UserBlog
