import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyBlog from './MyBlog';


const UserBlog = () => {
    const uid =  localStorage.getItem("userId")
    const [blogs,setBlogs]=useState()
    const userBlogs=async()=>{
        const res=await axios.get(`http://localhost:5000/api/blog/user/${uid}`)
        const data=res.data
        setBlogs(data.blog.blogs)
    }
useEffect(()=>{
    userBlogs();
},[])
  return (
<div>
    {blogs && blogs.map((blog,i)=>(
    <MyBlog key={i} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogImage={blog.blogImage}
      blogId={blog._id}
      />
  ))}
</div>
  )
}

export default UserBlog
