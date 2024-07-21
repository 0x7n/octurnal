import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import Contact from '../components/Contact';
import { IoIosArrowDown } from "react-icons/io";
import ScrollArrow from '../components/ScrollArrow';
import Bento from '../components/Bento';

const Home = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col items-center">
            <ScrollArrow />
            <Hero />
            <About />
            <Bento />
            <Contact />
        </div>
    )
}

export default Home