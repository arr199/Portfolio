import { useMemo, useState, useEffect, useContext } from 'react'
import { Project } from './Components/Project'
import { projectsList } from '../projectsList'
import { motion } from 'framer-motion'
import { fadeAnimation } from '../../animations/motions'
import { PageContext } from '../../../App'

export const Projects = () => {
  const [projects, setProjects] = useState(projectsList ?? null) // eslint-disable-line no-unused-vars
  const [isActive, setIsActive] = useState(null)
  const [width, setWidth] = useState(window.innerWidth)
  const { currentPage, setCurrentPage } = useContext(PageContext)
  const projectTransitionSpeed = 1.2

  useEffect(() => {
    const myPages = Array.from(document.querySelectorAll('.page'))
    const header = document.querySelector('#header')
    const observerOptions = {
      root: null,
      threshold: 1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.id === 'home-section') {
            setCurrentPage('home')
          } else if (e.target.id === 'projects-section') {
            setIsActive(1)
            setCurrentPage('projects')
            header.style.background = 'inherit'
          } else if (e.target.id === 'about-section') {
            setCurrentPage('about')
          }
        }
      })
    }, observerOptions)

    myPages.forEach(e => observer.observe(e))

    //  SET THE WIDTH EVERY TIME WE RESIZE THE BROWSER //
    function handleResize () {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pages = useMemo(() => {
    if (!projects) return
    // PROJECTS PER PAGE
    const projectsNumber = width < 768 ? 3 : width > 768 && width < 1280 ? 6 : 9
    return [...projects].filter((e, index) => {
      return isActive === 1 ? index <= projectsNumber - 1 : index < (isActive * projectsNumber) && index >= (isActive * projectsNumber) - projectsNumber
    })
  }, [isActive, width])

  return (
        <>

            <motion.section {...fadeAnimation(1)} id='projects-section' className='page overflow-hidden h-screen snap-start flex flex-col
            items-center transition-all duration-1000 '>

                {currentPage === 'projects' && <div className='w-[80%]  h-full max-h-[80%]  max-w-[80%] mx-auto ' >

                    {/* PROJECTS PAGES BUTTONS 1|2|3 */}
                    <div className={`w-[25vw]  mx-auto flex  justify-center items-center mt-24  [&>button]:border-[1px]
                    [&>button]:border-[#555555]  [&>button]:px-8   [&>button]:bg-[#141414] ;
                    `}>
                        <button className={isActive === 1 ? 'projects-btn-active' : 'projects-btn'}
                        onClick={() => setIsActive(1)}> 1 </button>
                        <button className={isActive === 2 ? 'projects-btn-active' : 'projects-btn'}
                        onClick={() => setIsActive(2)}> 2</button>
                        <button className={isActive === 3 ? 'projects-btn-active' : 'projects-btn'}
                        onClick={() => setIsActive(3)}>3</button>
                        {/* <button className={isActive === 4 ? 'projects-btn-active' : 'projects-btn'}
                        onClick={() => setIsActive(4)} >4 </button> */}

                    </div>
                    {/* min-w-[230px] sm:min-w-full w-[60vw] sm:w-[40vw] md:w-[24vw] lg:w-[22vw] */}
                    {/*  //// PROJECTS CONTAINER //// */}
                    <div className='projects-container pt-10 sm:p-8 mx-auto
                    grid  xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2   grid-cols-1 place-items-center sm:w-[100%] lg:w-fit   '>
                        { pages
                          ? pages.map((e, index) => {
                            return (
                            <motion.div className='border-4 border-black' {...fadeAnimation(
                              index === 0
                                ? 0.1 * projectTransitionSpeed
                                : index === 1
                                  ? 0.3 * projectTransitionSpeed
                                  : index === 2
                                    ? 0.6 * projectTransitionSpeed
                                    : index === 3
                                      ? 0.2 * projectTransitionSpeed
                                      : index === 4
                                        ? 0.4 * projectTransitionSpeed
                                        : index === 5
                                          ? 0.8 * projectTransitionSpeed
                                          : index === 6
                                            ? 0.5 * projectTransitionSpeed
                                            : index === 7
                                              ? 0.7 * projectTransitionSpeed
                                              : 0.9 * projectTransitionSpeed

                            ) } key={e.id}>
                                   <Project link={e.link} title={e.title} description={e.description}
                            imgUrl={e.imgUrl} technologies={e.technologies} >
                          </Project>

                            </motion.div>)
                          })
                          : ''}
                    </div>
                </div>}
            </motion.section>
        </>
  )
}
