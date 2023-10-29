import { motion } from 'framer-motion'
import { rotatingAnimation, slideAnimation } from '../../animations/motions'
import { SiTailwindcss, SiReactrouter } from 'react-icons/si'

export function SkillsContainer () {
  return (

      <div className='h-[500px] flex flex-col items-center  justify-center  max-w-[600px]'>
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

  )
}
