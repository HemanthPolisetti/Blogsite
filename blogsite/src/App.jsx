import {Routes,Route} from 'react-router-dom';
import './App.css'
import MainPage from './Components/MainPage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './Components/About'
import AddBlog from './Components/AddBlog'
import Homepage from './Components/Homepage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserBlog from './Components/UserBlog';
import NavBar from './Components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './Store/store';


function App() {
  const isLoggedin = useSelector((state)=>state.isLoggedin)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  },[dispatch])
  return (
    <>
    <header>
      <NavBar />
    </header>
    <Routes>
      {!isLoggedin ?
    <>
    <Route path='/' element={<MainPage />} />
      <Route path='/login'  element={<Login />} /> 
       <Route path='/signup'  element={<Signup />} /> 
    <Route path='/about' element={<About />} />
    </>
    :
    <>
      <Route path='/home' element={<Homepage />} />
      <Route path='/addblog'  element={<AddBlog />} />
    <Route path='/myblogs' element={<UserBlog />} />
    </>
  }

    </Routes>
   </>
  )
}

export default App
