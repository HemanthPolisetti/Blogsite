import { Card, CardBody, CardHeader, Input,Button,Link } from "@nextui-org/react";
import React, { useState } from 'react';
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import NavBar from './Navbar';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/store";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLoginChange=(e)=>{
    setInputs((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const requestLoginHandler=async()=>{
    const res= await axios.post('http://localhost:5000/api/user/login',{
        email:inputs.email,
        password:inputs.password
      }).catch((err)=>console.log(err));
      const data=res.data;
      return data
    }
    const handleLoginSubmit=(e)=>{
      e.preventDefault()
      requestLoginHandler().then((data)=>localStorage.setItem('userId',data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate('/home'))
    }
  return (
    <div>
      <NavBar />
      <div className="flex justify-center pt-2 mt-20 items-center italic ">
      <Card className="p-4 w-5/12 bg-current">
      <CardHeader className="pb-0 pt-2 flex-col Login Forms-start">
        <h4 className="text-large uppercase font-bold text-white">Login Form</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
  <form onSubmit={handleLoginSubmit}>
      <div className="flex flex-col items-center">
<Input
              type="email"
              label="Email"
              labelPlacement="outside"
              className='max-w-xs mt-6 italic'
              isRequired
              name='email'
              onChange={handleLoginChange}
              value={inputs.email} 
              />
<Input
      label="Password"
      labelPlacement="outside"
      // placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs mt-6" 
      name='password'
      onChange={handleLoginChange}
      value={inputs.password}
      isRequired
                                                                                            />
    <Button variant='ghost' color="current"  className='italic mt-6 text-white bg-#11181c' type='submit'>Login</Button>
    <p className="mt-4 text-white">Doesn`t have account <Link href='/signup'> SignUp</Link> here</p>
    </div>
    </form>
      </CardBody>
    </Card>
    </div>
    </div>
  )
}

export default Login
