import React from 'react'
import lights from '../assets/Lights.svg'
import lights2 from '../assets/Lights 2.svg'
import "../App.css"
import {delay, motion} from 'framer-motion'

const Hero = () => {

    const variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 3.9
            }
        }
    }

    const childVariants = {
        hidden: {
            y: '100%', opacity: 0
        },
        visible: {
            y: '0%', opacity: 1, transition: {duration: 1, ease:'easeOut'}
        }
    }

    const letters = 'OCTURNAL'.split('');

    return (
        <motion.div className='section w-full h-screen mx-auto text-center flex flex-col justify-center align-middle items-center'>
            <img src={lights2} 
                className='absolute -z-1 object-fill top-0'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease:'easeOut', delay: 3.2}}
            />

            <motion.h1 className='text-3xl font-bold'
                initial={{y: '100%', opacity: 0}}
                animate={{y: '0%', opacity: 1}}
                transition={{duration: 1, ease: 'easeOut', delay: 2.9}}
            >
                <span className='curved-underline'>
                    {letters.map((letter, i) => (
                        <motion.span key={i} whileHover={{scale:1.2}} transition={{ease: 'easeInOut', duration: 0.1}} className='inline-block'>{letter}</motion.span>
                    ))}
                </span>
            </motion.h1>
            <motion.div
                className="flex flex-row justify-center align-middle items-center gap-6"
                variants={variants}
                initial='hidden'
                animate='visible'
            >
                <motion.h2 variants={childVariants} className='text-sm font-semibold opacity-40'>
                    DEVELOPER
                </motion.h2>
                <motion.h2 variants={childVariants} className='text-sm font-semibold opacity-40'>
                    EDITOR
                </motion.h2>
            </motion.div>
        </motion.div>
    )
}

export default Hero