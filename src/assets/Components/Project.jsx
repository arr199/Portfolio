/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeAnimation, slideAnimation } from '../animations/motions'
import { SiTailwindcss, SiReactrouter } from 'react-icons/si'

export const Project = ({ title, description, imgUrl, technologies, link }) => {
  const [hover, setHover] = useState()

  function handleMouseHover () {
    setHover(true)
  }
  function handleMouseLeave () {
    const time = setTimeout(() => {
      setHover(false)
    }, 200)
    return () => clearTimeout(time)
  }

  return (
    /// /  PROJECT CONTAINER //////
    <div onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave} className="img-container  text-gray-300  max-w-[350px] max-h-[200px] cursor-pointer relative">

      <motion.img className=' w-full h-full' style={{ opacity: hover ? 0.1 : 1, transition: '.5s' }} src={imgUrl} alt="project preview image" />
      {hover
        ? <motion.div {...fadeAnimation()} className='absolute top-2 lg:p-4 p-2 inset-0 m-auto flex flex-col lg:gap-2 gap-1'>
          <motion.h1 {...slideAnimation('up', 0.2)} className='text-xl lg:text-3xl  text-gray-50'>{title} </motion.h1>
          <motion.p {...slideAnimation('left', 0.4)} className='italic font-light text-[14px] lg:text-[14px]'>{description}</motion.p>
          <motion.div className='flex  h-full items-end  justify-between gap-1'>
            <motion.a href={link} target='_blank' {...slideAnimation('right', 0.6)}
            className='bg-gray-800  text-gray-50 lg:text-inherit text-sm p-[5px] lg:px-4 py-2
            rounded-3xl duration-300 transition-shadow  hover:shadow-[0px_0px_7px_2px_white] '>
              Try it !
            </motion.a>
            <div className='flex mb-2'>
              {technologies
                ? technologies.map((e, index) => e === 'react-router'
                  ? <motion.div {...slideAnimation('right', index === 0 ? 1 : (index / 12) + 1)} key={e}><SiReactrouter className='w-6 h-6'></SiReactrouter></motion.div>
                  : e === 'tailwind'
                    ? <motion.div {...slideAnimation('right', index === 0 ? 1 : (index / 12) + 1)} key={e}><SiTailwindcss className='w-6 h-6  text-blue-500 bg-white rounded-full p-[2px]'></SiTailwindcss></motion.div>
                    : <motion.img {...slideAnimation('right', index === 0 ? 1 : (index / 12) + 1)} className='w-6 h-6 ' key={e} src={`/Icons/${e}.png`}></motion.img>)
                : ''}
            </div>
          </motion.div>

        </motion.div >
        : ''
      }

    </div>
  )
}
