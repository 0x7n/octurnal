import React from 'react'
import {motion} from 'framer-motion'

const About = () => {

    const letters = 'ABOUT.'.split('');

    return (
        <motion.div 
            id='about'
            className='section min-h-screen flex flex-col justify-center max-w-lg'
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
                    // amount: 'all',
                    margin: '-220px',
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
                    margin: '-200px',
                    once: false
                }}
                transition={{
                    delay: 1,
                    duration: 1
                }}
            >
                Self-taught progammer with more than 3 years of experience. Started off when I was 14 with making games in Unity, later moved on to learning more about C++ and gamehacking. Currently learning more about web development using React and Tailwind for the frontend and Express and MongoDB for the backend. Designing websites with Figma.
            </motion.p>
        </motion.div>
    )
}

export default About