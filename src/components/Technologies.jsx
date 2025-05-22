import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaHtml5, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiRedux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'
import { IoLogoCss3 } from 'react-icons/io'
import { FaBootstrap, FaGithub, FaJs } from 'react-icons/fa6'


const iconVariants = (duration) =>({
    initial : {y:-10},
    animate : {
        y:[10,-10]  ,
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : 'reverse',
        }
    }
})


const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className='p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className='p-4'>
                    <SiMongodb className='text-7xl text-green-700'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
                <IoLogoCss3 className='text-7xl text-blue-700'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
                <FaJs className='text-7xl text-yellow-300'/>
            </motion.div>
             <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
                <SiExpress className='text-7xl text-blue-300'/>
            </motion.div>
              <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
                <FaBootstrap className='text-7xl text-purple-500'/>
            </motion.div>
              <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
                <FaGithub className='text-7xl text-zinc-100'/>
            </motion.div>
                <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4">
                <SiRedux className='text-7xl text-purple-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies