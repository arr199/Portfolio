import { DownArrow } from '../Components/DownArrow'
import { PageContext } from '../App'
import { useContext } from 'react'
import { SkillsContainer } from '../Components/SkillsContainer'
import { HomePageBio } from '../Components/HomePageBio'

export const Home = () => {
  const { currentPage } = useContext(PageContext)
  return (
        <>
           <section id='home-section' className='page intro-section h-screen flex flex-col snap-center overflow-hidden items-center'>
                {/* //// INFO CONTAINER //// */}
                { currentPage === 'home' && <>
                <div className='  px-[1em] xl:px-[3em] flex xl:items-center w-full  h-full justify-center xl:justify-between xl:flex-row flex-col items-center '>
                    <HomePageBio></HomePageBio>
                    <SkillsContainer></SkillsContainer>
                </div>
                <DownArrow></DownArrow>
                 </>}
            </section>
        </>
  )
}
