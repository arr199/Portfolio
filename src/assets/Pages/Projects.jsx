import { useMemo, useState, useEffect } from 'react'
import { Project } from '../Components/Project'
import { projectsList } from '../Utils/projectsList'
import { motion } from 'framer-motion'
import { fadeAnimation } from '../animations/motions'
import { useGetCurrentPage, useGetScreenWidth } from '../Utils/Hooks'

export const Projects = () => {
  const [projects] = useState(projectsList ?? null)
  const [isActive, setIsActive] = useState(null)
  const { currentPage } = useGetCurrentPage()
  const { width } = useGetScreenWidth()

  const pages = useMemo(() => {
    if (!projects) return
    // PROJECTS PER PAGE
    const projectsNumber = width < 768 ? 3 : width > 768 && width < 1280 ? 6 : 9
    return [...projects].filter((e, index) => {
      return isActive === 1 ? index <= projectsNumber - 1 : index < (isActive * projectsNumber) && index >= (isActive * projectsNumber) - projectsNumber
    })
  }, [isActive, width])

  useEffect(() => {
    setIsActive(1)
  }, [currentPage])
  return (
    <>

      <motion.section {...fadeAnimation(1)} id='projects-section'
      className='page overflow-hidden h-screen snap-start flex flex-col
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
          </div>
          {/*  //// PROJECTS CONTAINER //// */}
          <div className='projects-container pt-10 sm:p-8 mx-auto
                    grid  xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2   grid-cols-1 place-items-center sm:w-[100%] lg:w-fit   '>
            {pages
              ? pages.map((e, index) => {
                return (
                  <motion.div className='border-4 border-black' {...fadeAnimation(index / 10)} key={e.id}>
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
