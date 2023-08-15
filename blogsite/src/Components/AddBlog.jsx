import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { Card, CardBody, CardHeader, Input,Button,Textarea} from "@nextui-org/react";
const AddBlog = () => {
  const [inputs,setInputs]=useState({
    title:'',
    description:'',
    image:'',
  })
  const uid=localStorage.getItem("userId")
  const handleChange=(e)=>{
    setInputs((prev)=>({
    ...prev,
    [e.target.name]: e.target.value
  }))
  }
  const requestHandle=async()=>{
    const res=await axios.post('http://localhost:5000/api/blog',{
        title:inputs.title,
        description:inputs.description,
        image:inputs.image,
        user:uid
    })
    const data = res.data;
    console.log(data);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    requestHandle()
  }
  return(
    <>
    <NavBar />
     <div className="flex justify-center pt-2 mt-20 items-center italic ">
      <Card className="p-4 w-5/12 bg-current">
      <CardHeader className="pb-0 pt-2 flex-col Login Forms-start">
        <h4 className="text-large uppercase font-bold text-white">Add Blog</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
  <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
      <Input type="text" label="Title" labelPlacement="inside" className='max-w-xs mt-6 italic' isRequired onChange={handleChange} name='title' value={inputs.title}/>
      <Textarea isRequired label="Description" labelPlacement="inside" className="max-w-xs italic mt-6" onChange={handleChange} name='description' value={inputs.description}    />
      <Input type="text" label="Image URL" labelPlacement="inside" className='max-w-xs mt-6 italic' onChange={handleChange} name='image' value={inputs.image} isRequired />
      <Button variant='ghost' color="current"  className='italic mt-6 text-white bg-#11181c' type='submit'>Add Blog</Button>

    </div>
    </form>
      </CardBody>
    </Card>
    </div>
    </>
  )
}

export default AddBlog
