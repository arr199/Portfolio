import { useContext } from 'react'
import { PageContext } from '../App'
import { ContactForm } from '../Assets/Components/ContactForm'
import { ContactInfo } from '../Assets/Components/ContactInfo'

export const About = () => {
  const { currentPage } = useContext(PageContext)

  return (
      <>
         <section id='about-section' className='page  h-screen snap-start overflow-hidden
           flex items-center justify-between flex-wrap md:flex-nowrap
          '>
            {currentPage === 'about' && <>
               {/* CONTAINER */}
               <div className='about-container h-[80vh] justify-center flex snap-mandatory snap-y overflow-auto
               md:flex-nowrap items-center  flex-wrap w-full shadow-[0px_0px_5px_3px_#343434] gap-20'>
                  <ContactInfo></ContactInfo>
                  <ContactForm></ContactForm>
               </div>
            </>}
         </section>
      </>
  )
}
