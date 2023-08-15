import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem,Link,Button} from "@nextui-org/react";
import logo from '../assets/blog.svg';
import { useSelector , useDispatch } from 'react-redux';
import { authActions } from '../Store/store';
const NavBar = () => {
  const isLoggedin = useSelector((state)=>state.isLoggedin)
  const dispatch=useDispatch()
  return (
    <div>    
        {!isLoggedin && 
        <Navbar className='bg-transparent'>
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
          </Navbar>
          }
          {isLoggedin &&  
          <Navbar className='bg-transparent'>
          <NavbarBrand justify='start'>
         <a href='/home'> <img src={logo} alt='logo' className='w-10' /></a>
          <p className='font-bold font-sans text-indigo-300'>BLOGIER</p>
       </NavbarBrand>
          <NavbarContent justify='end'>
            <NavbarItem>
            <Button as={Link} href="/myblogs" variant="solid"  className='bg-indigo-800 text-white font-bold italic'>
            MyBlogs
          </Button>
             </NavbarItem>
            <NavbarItem>
            <Button as={Link}  href="/addblog" variant="solid" className='bg-indigo-800 text-white font-bold italic'>
              Add Blog 
            </Button>
              </NavbarItem>
              <NavbarItem>
             <Button  as={Link}  href="/login" variant="ghost " className=' text-white font-bold italic' onClick={()=>dispatch(authActions.logout())}>
                LogOut
               </Button>
          </NavbarItem>
          </NavbarContent>
          </Navbar>
}
x    </div>
  )
}

export default NavBar
