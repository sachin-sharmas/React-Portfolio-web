import React, { useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import {Bio} from '../Data/info'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='flex lg:justify-around justify-between sticky top-0 bg-black text-white lg:p-3 px-6 py-3 shadow-md'>
      <div className='font-bold'>
        <h1 className='text-xl'>Portfolio.</h1>
      </div>
      <nav className='lg:flex lg:justify-between lg:items-center lg:gap-4 lg:text-xl hidden'>
       <NavLink to='/' className=''>Home</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/Projects'>Projects</NavLink>
       <NavLink to='/Contact'>Contact</NavLink>
      </nav>

      <div className='lg:block text-xl hidden'>
         <p className='text-white text-xs flex items-center gap-1 border p-[5px] rounded-lg hover:bg-white hover:text-black'>
         <FaGithub /><a href={Bio.github}>Github Profile</a></p>
      </div>

      <div className='lg:hidden text-[1.6rem]'>
        <AiOutlineMenuFold onClick={()=>setIsOpen(!isOpen)} />
      </div>

    </div>

    {
      isOpen && (
        <section>
        <div className="fixed left-0 top-10 w-full h-screen bg-black text-white px-2 py-[50px] flex-col z-10">
          <ul className="flex flex-col fixed w-full h-full items-center mt-4">
            <li>
              <NavLink
                to="/"
                className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
              >
                About
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/projects"
                className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
              >
                Contact
              </NavLink>
            </li>
            <li>
            <div className='text-xl mt-[1rem]'>
            <p className='text-white text-xs flex items-center gap-1 border lg:p-[5px] p-[8px] rounded-lg hover:bg-white hover:text-black'><FaGithub /><Link to={Bio.github}>Github Profile</Link></p>
            </div>
            </li>
          </ul>
        </div>
      </section>    
        )
    }

   

    </>
  )
}

export default Navbar
