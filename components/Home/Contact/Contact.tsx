import React from 'react'
import Contactform from './Contactform'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div id='contact'>
    <div className='pt-16 pb-16 bg-[#050709]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-18 mt-10'>
            {/* Contact Form */}
        <div>
            <Contactform />
        </div>
            {/* Contact Info */}
        <div className='xl:mx-auto'>
            <ContactInfo />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact