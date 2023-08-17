import React from 'react'
import NavBar from './Navbar'
import {Image} from "@nextui-org/react";
import img3 from '../assets/img3.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
const MainPage = () => {
  return (
    <div>
      <div className='pt-10 flex flex-col items-center'>
      <h2 className='font-bold font-sans text-white'>A Way To Express Yourself...</h2>
    <div className='flex'>
      <Image
      isBlurred
      width={700}
      src={img3}
      alt="NextUI Album Cover"
      classNames='m-5'
      className="mt-4"
    />
    <div>
    <Image isBlurred width={270} src={img1} className='mt-8 ml-2'/>
    <Image isBlurred width={270} src={img2} className='mt-12 ml-2 '/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default MainPage
