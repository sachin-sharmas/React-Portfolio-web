import React from 'react'
import Layout from '../components/Layout'
import { Bio } from '../Data/info'
import hero from '../img/h3.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import resume from '../files/sachinresume.pdf'

const Home = () => {
  return (
    <Layout>
      <div className='w-full md:h-[50vh] lg:h-[90vh] lg:flex lg:justify-between items-center gap-[2rem]'>
        <div className='lg:w-[60%]'>
          <h1 className='text-3xl font-bold md:w-[100%]'>Hii, I am {Bio.name}<br/>
        <TypeAnimation
        sequence={[
        'Frontend Developer', // Types 'One'
        1000, // Waits 1s
        'Web Developer', // Deletes 'One' and types 'Two'y
        2000, // Waits 2s
        'React Developer', // Types 'Three' without deleting 'Two'
        3000, // Waits 3s
        'Mern Stack Developer', // Types 'Four' without deleting 'Two'
             ]}

            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '2rem', display: 'inline-block' }}
            className='text-gray-200 my-[0.5rem]'/></h1>
                <p>{Bio.description}</p>
                <motion.button whileHover={{scale:1.1}} className='rounded-xl mt-[1rem] p-3 px-[2rem] text-sm bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-500 hover:to-blue-500'><a href={resume} download="resume">Check Resume</a></motion.button>
        </div>

        <div className='lg:w-[40%]  md:mt-[2rem] p-[1rem]'>
          <div className=''>
            <img src={hero}  alt='hero_img' className='rounded-full lg:w-[100%] md:w-[40%]' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
