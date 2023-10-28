import { motion } from 'framer-motion'
import { slideAnimation, slideBottomTopAnimation, slideRightToLeftAnimation, slideLeftToRightAnimation } from '../animations/motions'
import { BsArrowRightCircle } from 'react-icons/bs'

export function HomePageBio () {
  return (
        <div className='flex flex-col  xl:items-start  xl:w-[50%]  items-center justify-start '>
            <motion.span {...slideAnimation('', 0.3)} className='font-bold border-[1px] hidden xl:block text-[14px] border-gray-500  p-2 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 '>Welcome to my portfolio</motion.span>
            <motion.h1 {...slideBottomTopAnimation(0.4)} className='text-[2rem] mt-20 xl:m-0  xl:text-[3.5rem] py-1 font-bold'>Hello there! </motion.h1>
            <motion.h1 {...slideBottomTopAnimation(0.5)} className='animated-text text-[1.3rem] md:text-[2rem]  xl:m-0 xl:text-[3.5rem] py-1 xl:mb-4 font-bold'><span className=''>  </span> </motion.h1>
            <motion.p {...slideRightToLeftAnimation(0.6)} className='hidden xl:flex text-[16px] text-gray-300 max-w-[600px]'>
                I&apos;m a frontend developer who loves turning designs into interactive websites.
                Using HTML, CSS, and JavaScript, I create modern and user-friendly online experiences.
                Explore my portfolio to see what I can do!
            </motion.p>
            <motion.div {...slideLeftToRightAnimation(0.8)}>
                <span className='hidden xl:flex items-center gap-4 mt-14  cursor-pointer'>
                    Let&apos;s Connect
                    <BsArrowRightCircle className=' mt-1 scale-[1.5]'></BsArrowRightCircle>
                </span>
            </motion.div>
        </div>
  )
}
