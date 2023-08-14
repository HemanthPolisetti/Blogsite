import { Card, CardBody, CardHeader, Input,Button,Link } from "@nextui-org/react";
import React from 'react';
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import NavBar from './Navbar';

const Login = () => {
    const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <NavBar />
      <div className="flex justify-center pt-2 mt-20 items-center italic ">
      <Card className="p-4 w-5/12 bg-current">
      <CardHeader className="pb-0 pt-2 flex-col Login Forms-start">
        <h4 className="text-large uppercase font-bold text-white">Login Form</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div className="flex flex-col items-center">
      <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              className='max-w-xs mt-6 italic'
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
    />
    <Button variant='ghost' color="current"  className='italic mt-6 text-white bg-#11181c'>Login</Button>
    <p className="mt-4 text-white">Doesn`t have account <Link href='/signup'> SignUp</Link> here</p>
    </div>
      </CardBody>
    </Card>
    </div>
    </div>
  )
}

export default Login
