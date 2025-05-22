import React from 'react'
import logo from'../assets/logo.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
             <a href="/" aria-label='Home'>
             <img src={logo} className='mx-2' width={100} height={33} alt="Logo" />
             </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/adnaan-a-khader-074ab6319/" target='blank' rel='noopener noreferrer'aria-label='Linkedin' ><FaLinkedin/></a>
            <a href="https://github.com/Adnaan007-coder" target='blank' rel='noopener noreferrer'aria-label='Github' ><FaGithub/></a>
            <a href="https://www.instagram.com/adnaan.ae?igsh=cWpibDMzeW80dHM2&utm_source=qr" target='blank' rel='noopener noreferrer'aria-label='Instagram' ><FaInstagram/></a>
          


        </div>
    </nav>
  )
}

export default Navbar