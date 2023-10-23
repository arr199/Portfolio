import { useContext, useState } from 'react'
import { slideAnimation, slideLeftToRightAnimation, fadeAnimation } from '../../animations/motions'
import { motion } from 'framer-motion'
import { PageContext } from '../../../App'
import { SlSocialTwitter } from 'react-icons/sl'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'
import { FaFilePdf } from 'react-icons/fa'

export const About = () => {
  const { currentPage } = useContext(PageContext)
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      message: ''
    })

  function handleDownloadResume (e) {
    const downLoadLink = document.createElement('a')
    downLoadLink.href = '/resume.pdf'
    downLoadLink.download = 'resume.pdf'
    downLoadLink.click()
  }

  return (
      <>
         <section id='about-section' className='page  h-screen snap-start overflow-hidden
           bg-gray-800  flex items-center justify-between flex-wrap md:flex-nowrap
           bg-gradient-to-b from-gray-900 to-gray-600  '>
            {currentPage === 'about' && <>
               {/* CONTAINER */}
               <div className='about-container h-[80vh] justify-center flex snap-mandatory snap-y overflow-auto
               md:flex-nowrap items-center  flex-wrap w-full shadow-[0px_0px_5px_3px_#343434] gap-20'>
                  <div className="p-12  [&>div]:flex [&>div]:gap-2 flex flex-col gap-2 h-screen md:h-auto justify-center  snap-start overflow-hidden  ">
                     <div className='relative w-52 '>
                        <motion.img {...slideLeftToRightAnimation(0.1)} className="w-52 rounded-full " src="/images/abiel.jpg"></motion.img>
                     </div>
                     {/* NAME */}
                     <div>
                        <motion.h3 {...slideAnimation('up', 0.3)} className='text-[25px] font-bold'>Abiel Rodríguez Rodríguez</motion.h3>
                     </div>
                     {/* DESCRIPTION */}
                     <div className='max-w-[600px] text-[14px] md:text-[16px]'>
                        <motion.p {...slideAnimation('right', 0.5)} className='text-gray-300 py-4 '>
                           I&apos;m incredibly passionate about continuous learning and explore new concepts and skills .
                           Feel free to contact me , i&apos;m just an email away and ready to dive into new and exciting projects with you.
                        </motion.p >
                     </div>
                     {/* WHATSAPP */}
                     <motion.div {...slideAnimation('left', 0.7)}>
                        <motion.img className='w-6 ' src="Icons/whatsapp.png" alt="" />
                        <motion.span >+34 637 757 875</motion.span>
                     </motion.div>
                     {/* EMAIL */}
                     <motion.div {...slideAnimation('right', 0.8)}>
                        <motion.img className='w-6 ' src="Icons/mail.png" alt="" />
                        <motion.span >abieledelso@gmail.com</motion.span>
                     </motion.div>
                    {/* RESUME */}
                     <motion.button onClick={handleDownloadResume} className='send-btn border-2 border-slate-600 w-max px-4 py-2 rounded-xl mt-4 flex items-center gap-2  font-bold  '
                     {...slideAnimation('up', 0.8)}>Resume <FaFilePdf></FaFilePdf>
                     </motion.button>

                  </div>
                  {/* CONTACT FORM */}
                  <motion.form action="https://formsubmit.co/b6eb7205396bad3423b434e5c80a239d" method="POST"
                     className="contact-form shadow-form p-12  flex flex-col  rounded-3xl shadow-[0px_0px_15px_5px_black]
               [&>div>input]:px-2  [&>div>input]:py-4  [&>div>input]:bg-transparent
               [&>div>input]:border-[1px] [&>div>input]:border-[#5f5f5f]  [&>div>input]:rounded-xl gap-2
               [&>div>input]:placeholder:text-gray-300  [&>div>input]:outline-none md:h-auto h-screen overflow-hidden snap-start  justify-center
               w-full md:w-auto"
               {...fadeAnimation(1.4)}>
                     {/*  CONTACT ME */}
                     <motion.h1 className='text-xl py-4 flex items-center gap-4' {...fadeAnimation(1.4)}>
                       <img width="40px" className='bg-white rounded-full' src='/images/images/form.png'></img> Contact me
                     </motion.h1>
                    {/* INPUTS */}
                     <motion.div {...fadeAnimation(1.4)} className="grid sm:grid-cols-2 gap-2 [&>input]:sm:min-w-full [&>input]:min-w-[230px] ">
                        <input className='form-input' id='first-name' name='firstName' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" placeholder="First Name" required />
                        <input className='form-input' name='lastName' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type="text" placeholder="Last Name" required />
                        <input className='form-input' name='email' value={formData.emailAddress} onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })} type="email" placeholder="Email Address" required />
                        <input className='form-input' name='phone' value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} type="number" placeholder="Phone Number" required />
                     </motion.div>
                     {/* MESSAGE */}
                     <motion.textarea {...fadeAnimation(1.4)} name='message' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Message" required
                        className="resize-none form-input min-w-[230px] rounded-xl pb-40 pl-2 pt-2 bg-transparent border-[1px] border-[#5f5f5f]
                        placeholder:text-gray-300 outline-none"></motion.textarea>
                     {/* SEND BUTTON */}
                     <motion.button {...fadeAnimation(1.6)} className=" send-btn font-bold self-start mt-4 px-4 py-2 sm:px-10
                           text-gray-300 border-2 border-[#5f5f5f] flex items-center gap-2
                      active:scale-[0.98] rounded-xl
                       ">Send <VscSend ></VscSend> </motion.button>
                     <div className='form-socials-btn grid pt-14 mb-[-44px] '>
                        <ul className=" md:hidden gap-2 [&>li]:border-[1px] [&>li]:cursor-pointer flex flex-row items-end justify-center w-full [&>li]:rounded-full [&>li]:p-[11px] ">
                           <li className='social-icons '><a href='https://www.linkedin.com/in/abiel-rodriguez-rodriguez-48843a232' target='_blank' rel="noreferrer"> <AiOutlineLinkedin className='scale-[1.5]'></AiOutlineLinkedin></a></li>
                           <li className='social-icons '><a href="#"><SlSocialTwitter className='scale-[1.5]'></SlSocialTwitter> </a>
                           </li>
                           <li className='social-icons '><a href='https://github.com/arr199' target='_blank' rel="noreferrer"><BsGithub className='scale-[1.5]'></BsGithub></a></li>
                        </ul>
                     </div>
                  </motion.form>

               </div>
            </>}
         </section>
      </>
  )
}
