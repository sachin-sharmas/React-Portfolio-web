import React from 'react'
import Layout from '../components/Layout'
import { Bio, skills } from '../Data/info'
import about from '../img/about.avif'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <Layout>
      <div className='lg:w-[100%] shadow-md rounded-md p-6 lg:h-[50vh] lg:flex lg:justify-between items-center'>
        <motion.div
        initial={{x:-300,scale:1}}
        animate={{x:0, scale:1}}
        transition={{duration:1}}
            className='lg:w-[50%]'>
            <h1 className='text-center text-2xl text-white font-bold mb-2 border-b border-gray-400'>About Me!!</h1>
            <p className='text-sm text-gray-100'>{Bio.intro}</p>
        </motion.div>

        <motion.div
         initial={{x: 300,scale:1}}
         animate={{x:0, scale:1}}
         transition={{duration:1}}
        className='pt-[2rem]'>
          {/* Added alt attribute here */}
          <img src={about} alt="About section" className='w-[100%] lg:h-[35vh] md:h-[30vh] rounded-xl object-cover'/>

        </motion.div>

      </div>
    <div className='w-full lg:h-[80vh] md:h-[50vh] h-[80vh] mt-[1rem] lg:flex lg:justify-between items-center gap-[1rem] relative'>
      <div className='w-full '>
        <p className='text-center font-bold text-3xl pt-[1.5rem]'>Skills</p>
        <div className='lg:flex md:grid md:grid-cols-2 gap-[40px]'>
          {
            skills.map((item)=>(
                <div className='border-2 rounded-lg p-3 my-5 lg:w-[30%]'>
                    <div>
                      <p className='font-bold'>{item.title}</p>
                    </div>

                 <div className='flex flex-wrap items-center gap-[10px]'>
                 {
                  item.skills.map((skill)=>(
                      <div className='flex justify-between items-center border border-indigo-500/50 p-1 rounded-lg text-xs gap-2'>
                        {/* Added alt attribute here */}
                        <img src={skill.image} alt={`${skill.name} logo`} className='w-[20px]' />
                        <p>{skill.name}</p>
                      </div>
                    ))
                 }
                 </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default About
