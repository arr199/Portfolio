import { motion } from 'framer-motion'
import { slideAnimation, slideLeftToRightAnimation } from '../Assets/motions'
import { FaFilePdf } from 'react-icons/fa'

export function ContactInfo () {
  function handleDownloadResume (e) {
    const downLoadLink = document.createElement('a')
    downLoadLink.href = '/resume.pdf'
    downLoadLink.download = 'resume.pdf'
    downLoadLink.click()
  }

  return (
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
  )
}
