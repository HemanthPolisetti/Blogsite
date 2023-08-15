import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const blogFetcher =async()=>{
        const res= await axios.get('http://localhost:5000/api/blog')
        const data = res.data
        setBlogs(data.blogs)
    }
useEffect(()=>{
    blogFetcher()
},[])
  return (
    <div>
        {blogs && blogs.map((blog,i)=>(
             <Blog title={blog.blogTitle} desc={blog.blogDescription} user={blog.blogUser} image={blog.blogImage} key={i}/>
        ))}
    </div>
  )
}

export default Blogs
