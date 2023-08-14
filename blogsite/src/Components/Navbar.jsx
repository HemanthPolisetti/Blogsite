import React, { useState } from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem,Link,Button} from "@nextui-org/react";
import logo from '../assets/blog.svg';
const NavBar = () => {
  const [isLoggedin,setIsLoggedin]=useState(false)
  return (
    <div>
       {isLoggedin?null : 
       <Navbar  className='bg-transparent'>
          <NavbarBrand justify='start'>
            <a href='/'> <img src={logo} alt='logo' className='w-10' /></a>
             <p className='font-bold font-sans text-indigo-300'>BLOGIER</p>
          </NavbarBrand>
          <NavbarContent justify='end'>
            <NavbarItem>
            <Button as={Link} href="/login" variant="solid"  className='bg-indigo-800 text-white font-bold italic'>
            Login
          </Button>
             </NavbarItem>
            <NavbarItem>
            <Button as={Link}  href="/signup" variant="solid" className='bg-indigo-800 text-white font-bold italic'>
            Sign Up
          </Button>
              </NavbarItem>
              <NavbarItem>
             <Button as={Link}  href="/about" variant="ghost " className=' text-white font-bold italic'>
                About
               </Button>
          </NavbarItem>
          </NavbarContent>
        </Navbar>}
    </div>
  )
}

export default NavBar
