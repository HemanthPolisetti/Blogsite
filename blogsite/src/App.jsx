import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'
import MainPage from './Components/MainPage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './Components/About'
import AddBlog from './Components/AddBlog'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/add'  element={<AddBlog />} />
      <Route path='/login'  element={<Login />} />
      <Route path='/signup'  element={<Signup />} />
      <Route path='/about' element={<About />} />

    </Routes>
   </>
  )
}

export default App
