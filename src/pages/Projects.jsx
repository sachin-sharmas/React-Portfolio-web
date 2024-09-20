import React from 'react'
import Layout from '../components/Layout'
import { projects } from '../Data/info'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <Layout>
      <motion.div 
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.5,ease:'easeOut', delay:0.4}}
      >
      <div className='w-full h-[15vh]'>
      <div className='text-center pt-[2rem]'>
        <h1 className='text-2xl font-bold'>Projetcs</h1>
        <p className='text-xs'>some of my recent works</p>
      </div>
      </div>

        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-[2rem] pb-[8rem]'>
          {
            projects.map((item)=>{
              return(
                <>
                <div className='border-2 border-white rounded-md p-2 mt-[1rem]'>
                  <img src={item.image} alt='img' />
                  <p className='mt-1 font-bold'>{item.title}</p>
                  <div className='flex justify-around pt-2'>
                    <p><Link to={item.github} className='border border-gray-600 px-3 py-1 text-xs rounded-md hover:bg-white hover:text-gray-900'>Code</Link></p>
                    <p><Link to={item.webapp} className='border border-gray-600 px-3 py-1 text-xs rounded-md hover:bg-white hover:text-gray-900'>Demo</Link></p>
                  </div>
                 </div>
                </>
              )
            })
          }
        </div>
        </motion.div>
   
    </Layout>
  )
}

export default Projects
