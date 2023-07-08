import React from 'react'
import {motion} from 'framer-motion';
import{styles} from '../styles';
import {ComputersCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[2rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi <span className='text-[#915eff]'>!</span> I'm <span className='text-[#915eff]'>Amber</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            A front-end designer & developer <br className='sm:block hidden'></br>who also work with UI/UX of web applications.
          </p>
          <p className='font-[10px] text-purple-400 mt-2'>(If loaded, try rotating the model below :)</p>
        </div>

      </div>

       <ComputersCanvas />

       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 '
            />
          </div>
        </a>
      </div>

    </section>
  
    )
}

export default SectionWrapper(Hero,"home")