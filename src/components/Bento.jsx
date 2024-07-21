import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillsTag = ({text}) => {
    return (
        <li className='hover:scale-105 transition-all ease-in-out border border-[#2D2747] rounded-sm inline-block text-center p-2 m-1'>{text}</li>
    )
}

const Bento = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex justify-start w-full">
                <h1 className='text-3xl tracking-tighter font-bold opacity-80 mx-10'>WHAT I OFFER</h1>
            </div>
            <div className='section flex w-full container mx-auto py-14'>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
                    <motion.div className="p-6 rounded-lg flex flex-col items-start justify-center gap-1 glass col-span-1 md:row-span-1" variants={variants}>
                        <span className='text-3xl font-bold'>Custom Designs</span>
                        <p className='mt-2 text-sm tracking-tighter'>Creating unique designs fitting your needs</p>
                    </motion.div>
                    <motion.div className="p-6 rounded-lg flex flex-col items-start justify-center gap-1 glass col-span-1 md:row-span-1" variants={variants}>
                        <span className='font-semibold tracking-tighter text-gray-400'>AFFORDABLE</span>
                        <span className='text-3xl font-bold tracking-tighter'>PRICING</span>
                        <p className='mt-2 text-sm tracking-tighter'>Offering competitive rates for high-quality services, ensuring value for every dollar spent.</p>
                    </motion.div>
                    <motion.div className="p-6 rounded-lg flex flex-col items-start justify-center gap-1 glass col-span-1 md:row-span-2" variants={variants}>
                        <span className='text-3xl font-bold my-2 tracking-tighter'>Skills</span>
                        <ul>
                            <SkillsTag text={"UI Design"} />
                            <SkillsTag text={"Front End Development"} />
                            <SkillsTag text={"Back End Development"} />
                            <SkillsTag text={"Game Development"} />
                            <SkillsTag text={"HTML"} />
                            <SkillsTag text={"CSS"} />
                            <SkillsTag text={"JavaScript"} />
                            <SkillsTag text={"React"} />
                            <SkillsTag text={"Tailwind"} />
                            <SkillsTag text={"MongoDB"} />
                            <SkillsTag text={"FramerMotion"} />
                            <SkillsTag text={"Express"} />
                            <SkillsTag text={"Node"} />
                            <SkillsTag text={"C++"} />
                            <SkillsTag text={"C#"} />
                        </ul>
                    </motion.div>
                    <motion.div className="p-6 rounded-lg flex flex-col items-start justify-center gap-1 glass md:col-span-2" variants={variants}>
                        <span className='tracking-tighter text-gray-400 font-semibold'>MORE THAN</span>
                        <span className='text-3xl font-bold tracking-tighter'>5+ Happy Clients</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Bento