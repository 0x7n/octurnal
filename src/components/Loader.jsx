import React, {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('no-scroll');

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove('no-scroll');
        }, 3000);
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('no-scroll');
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                className='flex flex-col items-center align-middle justify-center h-full w-full bg-black absolute z-50'
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{duration: .35, ease: 'easeOut'}}
                >
                <motion.h1
                    className='text-3xl font-bold text-white'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                >
                    welcome.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.25, ease: 'easeIn' }}
                >
                    (this is wip)
                </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader