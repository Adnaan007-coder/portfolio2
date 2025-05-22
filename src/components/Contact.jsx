import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { BiLocationPlus } from 'react-icons/bi'
import { FaLocationPin, FaWhatsapp } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:1,y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='my-4'>
           <HiLocationMarker  className='inline mr-1 '/>
            {CONTACT.address}
        </motion.p>
        <motion.a 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='my-4' href='https://wa.me/917356636338' target='_blank' rel='noopener noreferrer'>
           <IoLogoWhatsapp className='inline mr-1 ' /> {CONTACT.phoneNo}
        </motion.a>
       
        <motion.a
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
       className='block mt-4'
        href="mailto:adnaana523@gmail.com" target='_blank' rel='noopener noreferrer' >
            <IoIosMail className='inline mr-1' /> {CONTACT.email}
        </motion.a>
      </div>
    </div>
  )
}

export default Contact