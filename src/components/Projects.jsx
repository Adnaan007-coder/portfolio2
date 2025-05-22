import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:jusify-center' >
                       <motion.div
                       whileInView={{opacity:1,x:0}}
                       initial={{opacity:0,x:-100}}
                       transition={{duration:1}}
                       className="w-full lg:w-1/4">
                       <img src={project.image} width={250} height={250} alt={project.title} className='mb-6 rounded' />
                       </motion.div>
                       <motion.div
                       whileInView={{opacity:1,x:0}}
                       initial={{opacity:0,x:100}}
                       transition={{duration:1}}
                       className='w-full max-w-xl lg:w-3/4'>
                           <h3 className='mb-2 font-semibold text-2xl '>
                                 {project.title}
                           </h3>
                           <p className='mb-4 text-stone-400'>
                                 {project.description}
                           </p>
                             {project.technologies.map((tech, index) => (
                                <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>{tech}</span>
                            ))}
                        
                            
                       </motion.div>
                      <div className='align-center align-middle justify-center items-center flex'> 
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className='mt-4 rounded-3xl bg-[#cfd0d2] px-4 py-2 text-sm font-medium text-black hover:bg-stone-400'>
                            View Project
                        </a>
                      </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects