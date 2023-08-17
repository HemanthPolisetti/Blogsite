import { Card, CardBody, CardHeader, Input,Button,Link } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import {EyeFilledIcon} from "../assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../assets/EyeSlashFilledIcon";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from "../Store/store";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [matchPassword,setMatchPassword]=useState(false)
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    password:'',
    cpassword:''
  })
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const passwordHandler=()=>{
    if(inputs.password==inputs.cpassword){
      setMatchPassword(true)
    }
    else{
      setMatchPassword(false);
      alert("Passwords doesn`t match")
    }
  }
  const requestHandler=async()=>{
  const res= await axios.post('http://localhost:5000/api/user/signup',{
      name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch((err)=>console.log(err));
    const data=res.data;
    console.log(data)
    return data
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    requestHandler().then((data)=>localStorage.setItem('userId',data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate('/home'))
  }
  const toggleVisibility = () => setIsVisible(!isVisible);

  
  return (
  <div>
  <div className="flex justify-center pt-2 mt-20 items-center italic ">
  <Card className="p-4 w-5/12 bg-current">
  <CardHeader className="pb-0 pt-2 flex-col Login Forms-start">
    <h4 className="text-large uppercase font-bold text-white">Signup Form</h4>
  </CardHeader>
  <CardBody className="overflow-visible py-2">
  <form onSubmit={handleSubmit}>
  <div className="flex flex-col items-center">
  <Input
          type="text"
          label="UserName"
          labelPlacement="outside"
          className='max-w-xs mt-6 italic'
          name='name'
          onChange={handleChange}
          value={inputs.name}
          isRequired
        />
  <Input
          type="email"
          label="Email"
          labelPlacement="outside"
          className='max-w-xs mt-6 italic'
          name='email'
          onChange={handleChange}
          value={inputs.email}
          isRequired
        />
    <Input
          type="Password"
          label="Password"
          labelPlacement="outside"
          className='max-w-xs mt-6 italic'
          name='password'
          onChange={handleChange}
        value={inputs.password}
        isRequired
        />
   <Input
  label="Confirm Password"
  labelPlacement="outside"
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
  onChange={handleChange}
  name='cpassword'
  value={inputs.cpassword}
  className="max-w-xs mt-6"
  isRequired
/>
{matchPassword?<Button variant='ghost' color="current"  className='italic mt-6 text-white bg-#11181c' type='submit' onClick={passwordHandler}>Signup</Button>:
<Button variant='ghost' color="current"  className='italic mt-6 text-white bg-#11181c' type='button' onClick={passwordHandler}>Signup</Button>}

<p className="mt-4 text-white">Already have an account <Link href='/login'> Login </Link> here</p>
</div>
</form>
  </CardBody>
</Card>
    </div>
    </div>
  )
}

export default Signup
