import React, {useEffect, useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";

const ScrollArrow = () => {

    const [isVisible, setIsVisible] = useState(true);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;    
            const scrolledToBottom = window.scrollY >= scrollableHeight;

            if(scrolledToBottom){
                setIsVisible(false);
            } else {
                setIsVisible(true); 
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.section + .section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            setIsVisible(false);
        }
      };

    if(!isVisible) return null;

    return (
        <div className="absolute mx-auto bottom-10 text-center z-20">
            <IoIosArrowDown onClick={scrollToNextSection} className=' hover:scale-125 transition-all ease-in-out'/>
        </div>
    )
}

export default ScrollArrow