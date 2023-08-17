import React ,{useEffect, useState} from 'react'
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure,Input,Textarea} from "@nextui-org/react";
import editIcon from '../assets/pencil.svg'
import deleteIcon from '../assets/delete.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MyBlog = ({blogTitle,blogImage,blogDescription,blogId}) => {
    const [blog,setBlog]=useState()
    const [inputs,setInputs]=useState()
    const navigate=useNavigate()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const handleChange=(e)=>{
        setInputs({
            [e.target.name]: e.target.value
          })
    }
const fetchBlog=async()=>{
    const res= await axios.get(`http://localhost:5000/api/blog/${blogId}`)
    const data = res.data
    setBlog(data.blog)
    setInputs({title:data.blog.blogTitle,description:data.blog.description})
}

useEffect(()=>{
  fetchBlog()
},[])
const requestHandler=async()=>{
    const res= await axios.put(`http://localhost:5000/api/blog/${blogId}`,{
        title:inputs.title,
        description:inputs.description
})
        const data=res.data 
        return data
}
    const handleEdit=(e)=>{
        e.preventDefault()
        requestHandler().catch((err)=>console.log(err)).then(()=>navigate('/home'))
    }
    const handleDelete=(async()=>{
      const res= await axios.delete(`http://localhost:5000/api/blog/${blogId}`)
      const data=res.data
      return data
    })
    const deleteHandler=()=>{
        handleDelete().then(()=>navigate('/home'))
    }
  return (
    <div>
      <div className=' flex justify-center items-center pt-2'>
    <Card className="py-4 w-2/4 h-2/12 bg-current">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    <div className='w-2 flex ml-96 pl-10'>
    <Button variant='flat' color='current' onPress={onOpen} ><img src={editIcon} alt='edit' className='w-8'/></Button>
    <Button variant='flat' color='current'><img src={deleteIcon} alt='delete' className='w-8'onClick={deleteHandler}/></Button>
    </div>
      <p className="text-large uppercase font-bold text-white ">{blogTitle}</p>
      <h4 className="text-medium text-white pl-4">{blogDescription}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
    <div className='flex justify-center'>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={blogImage}
        width={340}
      />
      </div>
    </CardBody>
  </Card>
  </div>
  <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} backdrop='blur'>
        <ModalContent className='bg-current'>
          {(onClose) => (
            <div>
            <form onSubmit={handleEdit}>
              <ModalHeader className="flex flex-col gap-1 text-white">Edit Blog</ModalHeader>
              <ModalBody>
              <Input type="text" label="Title" labelPlacement="inside" className='max-w-xs mt-6 italic' onChange={handleChange}   name='title' />
                <Textarea  label="Description" labelPlacement="inside" className="max-w-xs italic mt-6" onChange={handleChange} name='description'/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light">
                  Close
                </Button>
                <Button color="primary" type='submit' onClick={onClose}>
                  Update
                </Button>
              </ModalFooter>
            </form>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
    </div>
  )
}

export default MyBlog;
