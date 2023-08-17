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
            <p className='flex font-bond text-lg pl-10 m-8'>This is a MERN stack blog app that I built to learn more about the MERN stack and to practice my JavaScript skills. The app has the following features:</p>
<ul className='list-disc'>
<li> User signin and login</li>
<li>Feed page where blogs are displayed</li>
<li>Add blog page where users can add new blogs</li>
<li>My blogs page where users can view their own blogs</li>
<li>Edit blog and delete blog options on the my blogs page</li>
<li>MongoDB database to store blog data</li>
<li>Express JS backend with password validity and password encryption</li>
</ul>
<p className='flex font-bond text-lg pl-10 m-8'>I'm really happy with how this app turned out, and I hope you find it useful! If you're interested in learning more about the MERN stack or JavaScript, I'd be happy to share more details about this project. You can also find the source code on GitHub.
            </p>
          <div className='flex items-center justify-between'>
           <a href='https://www.linkedin.com/in/hemanth-polisetti-042308171' target='_blank'> <img src={linkedin} alt='linkedin' className='w-10'/></a>
           <a href='https://github.com/HemanthPolisetti/Blogsite' target='_blank' ><img src={github} alt='github' className='w-16 pl-4'/></a>
          </div>
        </div>
    </div>
  )
}

export default About
