import { BsArrowRightCircle } from 'react-icons/bs'
import { SiTailwindcss, SiReactrouter } from 'react-icons/si'
import { slideAnimation, slideLeftToRightAnimation, slideBottomTopAnimation, rotatingAnimation, slideRightToLeftAnimation } from '../../animations/motions'
import { DownArrow } from './Components/DownArrow'
import { motion } from 'framer-motion'
import { PageContext } from '../../../App'
import { useContext } from 'react'

export const Home = () => {
  const { currentPage } = useContext(PageContext)
  return (
        <>
           <section id='home-section' className='page intro-section h-screen flex flex-col snap-center overflow-hidden items-center'>
                {/* //// INFO CONTAINER //// */}
                { currentPage === 'home' && <>
                <div className='  px-[1em] xl:px-[3em] flex xl:items-center w-full  h-full justify-center xl:justify-between xl:flex-row flex-col items-center '>
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
                            <a className='hidden xl:flex items-center gap-4 mt-14  cursor-pointer'>
                                Let&apos;s Connect
                                <BsArrowRightCircle className=' mt-1 scale-[1.5]'></BsArrowRightCircle>
                            </a>
                        </motion.div>
                    </div>

                    <div className='h-[500px] flex flex-col items-center  justify-center  max-w-[600px]'>

                {/* ////  SKILLS CONTAINER //// */}
                        <div className='grid grid-cols-4 gap-4 md:gap-10 p-8 [&>img]:min-w-[30px]  '>
                            <motion.img id='react' {...rotatingAnimation(1)}
                                className='skills w-20 hover:scale-[2] ' src="/Icons/react.png">
                            </motion.img>
                            <motion.div {...rotatingAnimation(1.1)} className='skills max-w-20 max-h-20 min-w-[30px] '>
                                <SiReactrouter className='w-full h-full  '></SiReactrouter>
                            </motion.div>
                            <motion.img {...rotatingAnimation(1.2)} className='skills w-20' src="/Icons/typescript.png"></motion.img>
                            <motion.img {...rotatingAnimation(1.3)} className='skills w-20' src="/Icons/javascript.png"></motion.img>
                            <motion.img {...rotatingAnimation(1.4)} className='skills w-20' src="/Icons/html.png"></motion.img>
                            <motion.img {...rotatingAnimation(1.5)} className='skills w-20' src="/Icons/css.png"></motion.img>
                            <motion.div {...rotatingAnimation(1.6)} className='skills  max-w-20 min-h-20 min-w-[30px]'>
                                <SiTailwindcss className='w-full h-full  text-blue-500 bg-white rounded-full p-2'></SiTailwindcss>
                            </motion.div>
                            <motion.img {...rotatingAnimation(1.7)} className='skills w-20' src="/Icons/nodejs.png"></motion.img>
                            <motion.img {...rotatingAnimation(1.8)} className='skills w-20' src="/Icons/firebase.png"></motion.img>
                        </div>
                        <motion.div {...slideAnimation('right', 1.9)} className='hidden xl:block w-[60%] ml-10 self-start bg-slate-100 h-[2px]' ></motion.div>
                    </div>
                </div>
                 {/* ////  SEE MY WORK ARROW //// */}

                 <motion.div {...slideBottomTopAnimation(2)} className='absolute inset-0 mt-[300px]' id="wrapper"
                 onClick={() => document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' })}>
                 <DownArrow ></DownArrow>
                </motion.div>
                 </>}
            </section>
        </>
  )
}
