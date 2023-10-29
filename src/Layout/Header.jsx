import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SlSocialTwitter } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { slideAnimation } from '../../animations/motions'

export const Header = () => {
  function handleHomeClick () {
    const homeSectionEl = document.querySelector('#home-section')
    homeSectionEl.scrollIntoView({ behavior: 'smooth' })
  }
  function handleProjectClick () {
    const projectsSectionEl = document.querySelector('#projects-section')
    projectsSectionEl.scrollIntoView({ behavior: 'smooth' })
  }
  function handleAboutClick () {
    const aboutSectionEl = document.querySelector('#about-section')
    aboutSectionEl.scrollIntoView({ behavior: 'smooth' })
  }

  function handleLetsConnectClick () {
    const aboutSectionEl = document.querySelector('#about-section')

    aboutSectionEl.scrollIntoView({ behavior: 'smooth' })
    setTimeout(async () => {
      const firstNameEl = document.querySelector('#first-name')
      firstNameEl.focus()
    }, 800)
  }

  return (

    <motion.header id='header' {...slideAnimation('up', 0.2)} className=" sm:px-[3em] px-[2em]  fixed  z-10  overflow-hidden w-full py-4">
      <nav className="flex items-center h-full w-full  justify-around ">
        {/* PAGES LINKS */}
        <ul className=" flex  sm:gap-20 gap-2  [&>li]:cursor-pointer justify-between w-full md:w-auto [&>li]:text-[18px]">
          <li className='hover:underline hover:underline-offset-2 ' onClick={handleHomeClick}>Home</li>
          <li className='hover:underline hover:underline-offset-2 ' onClick={handleProjectClick}>Projects</li>
          <li className='hover:underline hover:underline-offset-2 ' onClick={handleAboutClick}>About me</li>
        </ul>
        {/* SOCIALS LINKS */}
        <ul className=" lg:flex gap-4 [&>li]:border-[1px] [&>li]:cursor-pointer hidden [&>li]:rounded-full [&>li]:p-[11px] mr-10 ml-auto ">

          <li className='social-icons '><a href='https://www.linkedin.com/in/abielrr' target='_blank' rel="noreferrer"> <AiOutlineLinkedin className='scale-[1.5]'></AiOutlineLinkedin></a></li>
          <li className='social-icons '><a href="#"><SlSocialTwitter className='scale-[1.5]'></SlSocialTwitter> </a>
          </li>
          <li className='social-icons '><a href='https://github.com/arr199' target='_blank' rel="noreferrer"><BsGithub className='scale-[1.5]'></BsGithub></a></li>
        </ul>
        <button onClick={handleLetsConnectClick} className="connect-btn  mr-2 hidden md:block  sm: border-solid border-[1px]
            border-gray-400 px-4 py-3 font-bold text-[1.1rem] ">
          Let&apos;s Connect
        </button>
      </nav>
    </motion.header>

  )
}
