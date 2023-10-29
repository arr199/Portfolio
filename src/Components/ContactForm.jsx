import { motion } from 'framer-motion'
import { fadeAnimation } from '../../animations/motions'
import { useState } from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'

export function ContactForm () {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      message: ''
    })

  return (
        <motion.form action="https://formsubmit.co/b6eb7205396bad3423b434e5c80a239d" method="POST"
        className="contact-form shadow-form p-12  flex flex-col  rounded-3xl shadow-[0px_0px_15px_5px_black]
         gap-2 md:h-auto h-screen overflow-hidden snap-start  justify-center  w-full md:w-auto"
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
           className="form-input resize-none min-w-[230px]  pb-40 pl-2 pt-2 outline-none">
        </motion.textarea>
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

  )
}
