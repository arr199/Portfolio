import { slideBottomTopAnimation } from '../animations/motions'
import { motion } from 'framer-motion'

export const DownArrow = () => {
  return (

    <motion.div {...slideBottomTopAnimation(2)} className='absolute inset-0 mt-[300px]' id="wrapper"
      onClick={() => document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' })}>
      <div id="wrapper-inner">
        <div id="scroll-down">
          <span className="arrow-down">
          </span>
          <span id="scroll-title" className='cursor-pointer'>
            See my work
          </span>
        </div>
      </div>
    </motion.div>

  )
}
