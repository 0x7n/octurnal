import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
        <Hero />
        <div className="absolute mx-auto bottom-10 text-center">
            <IoIosArrowDown className=' hover:scale-125 transition-all ease-in-out'/>
        </div>
        <About />
    </div>
  )
}

export default Home