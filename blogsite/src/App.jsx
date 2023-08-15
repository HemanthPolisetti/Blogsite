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


function App() {
  const isLoggedin = useSelector((state)=>state.isLoggedin)
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      {isLoggedin && <Route path='/home' element={<Homepage />} />}
      <Route path='/addblog'  element={<AddBlog />} />
     {!isLoggedin && <Route path='/login'  element={<Login />} /> }
     {!isLoggedin &&  <Route path='/signup'  element={<Signup />} /> }
    <Route path='/about' element={<About />} />
    <Route path='/myblogs' element={<UserBlog />} />


    </Routes>
   </>
  )
}

export default App
