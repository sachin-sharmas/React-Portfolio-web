import React, { useState } from 'react'
import Layout from '../components/Layout'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';


const Contact = () => {
  const [name, setName] = useState('')
  const [email , setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleMessage = (e)=>{
    e.preventDefault()

    // create new object that contain all dynamic data
    const templateParams ={
      from_name :name,
      from_email:email,
      to_name:'',
      message:message,
    }
    emailjs.send('service_pmbw4i5','template_hzzalhr', templateParams,'Da5X3W4TRVurTp9D4',)
    .then((res)=>{
      toast.success("Email Send Successfully !!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      
        })
      setName('')
      setEmail('')
      setMessage('')
        } )
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <Layout>
      <div className='w-full h-[100vh]'>
        <div className='lg:pt-[20px] lg:text-start pt-[3rem] text-center'>
          <p className='text-gray-400 font-serif font-semibold'>get in touch</p>
          <h1 className='text-2xl font-bold'>CONTACT ME!!</h1>
        </div>

        <div className='lg:flex lg:justify-around items-center lg:relative lg:after:absolute lg:after:w-[2px] after:h-[60vh] after:bg-gray-300 after:left-[40%] after:top-[5%] after:transform-[-50%,-50%]'>
          <motion.div 
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5,ease:'easeOut', delay:0.2}}
          className='pt-[1rem] lg:w-[40%]'>
            <p className='flex items-center gap-[10px] py-2'><FaPhoneAlt /> 7304578100</p>
            <p className='flex items-center gap-[10px] py-2'><MdEmail />sachins292000@gmail.com</p>
            <p className='flex items-center gap-[10px] py-2'><IoLocation />Andheri (W), Mumbai</p>
          </motion.div>

          <motion.div
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5,ease:'easeOut', delay:0.4}}
          className='lg:pt-[0.2rem] lg:w-[50%] pt-[4rem]  '>
            <div>
              <label for="first_name" class="block m-2 text-sm font-medium text-white">Enter Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required />
            </div>

            <div>
                <label for="first_name" class="block m-2 text-sm font-medium text-white">Enter Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required />
            </div>

            <div>
                <label for="first_name" class="block m-2 text-sm font-medium text-white">Message</label>
                <textarea cols='40' rows='5' type="text" value={message} onChange={(e)=>setMessage(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message...." required />
            </div>

            <button onClick={handleMessage} className='border rounded-md border-slate-300 hover:border-indigo-300 hover:bg-white hover:text-black px-5 py-1 mt-5 flex items-center gap-2'>Send<IoIosSend /></button>
           
          </motion.div>
        </div>

    </div>
    <ToastContainer />
    </Layout>
  )
}

export default Contact
