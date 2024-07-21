import React, {useEffect, useState, useRef} from 'react'
import {motion} from 'framer-motion'


const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);

    const variants = {
        default: {
            x: position.x - 10,
            y: position.y - 10,
            transition: {
                duration: 0,
              },
        }
    }

    return (
        <motion.div 
            className='custom-cursor' 
            variants={variants}
            animate="default"
        >
            
        </motion.div>
    )
}

export default Cursor