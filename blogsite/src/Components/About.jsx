import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
const About = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-start'>
        <h1 className='font-bold text-2xl underline mt-4'>About</h1>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <p className='flex font-bond text-lg p-10 m-8'>Hi! This is Hemanth Kumar.It is a task manager webapp with basic create and delete functionality and it written in MERN Stack
                Feel free to Give me your suggestions.
            </p>
          <div className='flex items-center justify-between'>
           <a href='https://www.linkedin.com/in/hemanth-polisetti-042308171' target='_blank'> <img src={linkedin} alt='linkedin' className='w-10'/></a>
           <a href='www.google.com' target='_blank' ><img src={github} alt='github' className='w-16 pl-4'/></a>
          </div>
        </div>
    </div>
  )
}

export default About
