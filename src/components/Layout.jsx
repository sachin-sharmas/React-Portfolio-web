import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
      <div>
        <Navbar />
        <div className='lg:px-[6rem] px-[2rem] pt-[0.9rem] bg-[#121010] text-white'>
          {children}
        </div>
        <Footer />
      </div>
    )
  }

export default Layout
