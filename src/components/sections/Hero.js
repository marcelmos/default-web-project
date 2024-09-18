import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import HeroParallax from "../HeroParallax";


export default function Hero() {
    return(
        <section id="home-section" className="px-0 md:px-12 xl:px-24 py-24 h-full min-h-screen max-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 max-h-screen">
                <div className="flex flex-col justify-center z-40 px-5">
                    <h2 className="rellax  bg-coal-600 bg-opacity-50 md:bg-opacity-0 max-w-fit font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl border-l-[10px] md:border-l-[20px] border-yellow-400 px-4 pt-2 whitespace-nowrap" data-rellax-speed="-4">Hi, I'm Marcel<br />a <span className='text-yellow-400'>web developer</span><br/>from <span className='italic font-light'>Poland! </span>👋</h2>
                    <span className="h-1/2 border-r-4 md:border-r-white border-r-transparent absolute left-1/2 right-1/2"></span>
                </div>
                <HeroParallax />
            </div>

            <div className="absolute bottom-2.5 md:bottom-10 right-0 left-0 z-50">
                <a href="#projects-section" className=' max-w-[60px] mx-auto flex justify-center hover:text-yellow-500'><ArrowDownIcon className='w-10 animate-bounce' /></a>
            </div>
        </section>
    );
}