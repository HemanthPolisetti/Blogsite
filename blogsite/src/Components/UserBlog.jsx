import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './Navbar';
import {Card, CardHeader, CardBody, Image } from "@nextui-org/react";

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
    <Card className="py-4 w-2/4 h-2/12 bg-current">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold text-white ">{blog.blogTitle}</p>
      <h4 className="text-large text-white">{blog.blogDescription}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
    <div className='flex justify-center'>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={blog.blogImage}
        width={270}
      />
      </div>
    </CardBody>
  </Card>
  </div>
  ))}
</div>
  )
}

export default UserBlog
