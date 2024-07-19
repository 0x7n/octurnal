import React from 'react'
import {motion} from 'framer-motion'

const About = () => {

    const letters = 'ABOUT.'.split('');

    return (
        <motion.div 
            id='about'
            className='min-h-screen flex flex-col justify-center max-w-lg'
        >
            <motion.h1 
                className='opacity-60 text-3xl font-bold tracking-tighter'
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
    
                viewport={{
                    amount: 'all',
                    once: false
                }}
                transition={{
                    delay: 0.25,
                    duration: 1
                }}
            >
                {letters.map((letter, i) => (
                    <motion.span key={i} whileHover={{scale:1.2}} transition={{ease: 'easeInOut', duration: 0.1}} className='inline-block'>{letter}</motion.span>
                ))}
            </motion.h1>
            <motion.p 
                className='tracking-tighter ml-auto'
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
    
                viewport={{
                    amount: 'all',
                    once: false
                }}
                transition={{
                    delay: 1,
                    duration: 1
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed provident odit excepturi fugiat cumque maiores. At eum, provident repellendus nemo illum expedita ea, numquam assumenda deleniti eligendi praesentium exercitationem?
            </motion.p>
        </motion.div>
    )
}

export default About