import React from "react";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaPhp, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { DiMysql, DiJqueryLogo } from "react-icons/di";
import { SiPhpmyadmin, SiTailwindcss } from "react-icons/si";

export default function HeroParallax(){
    return(
        <div className="hero-img flex items-center justify-center h-full max-h-screen relative">
            <div className="hero-img__icons -bottom-15 md:bottom-auto opacity-50 md:opacity-100">
                <span className="rellax absolute -bottom-12 left-2/12" data-rellax-speed="1">
                    <FaBootstrap className="w-15 h-15" />
                </span>
                <span className="rellax absolute -bottom-28 left-5/12" data-rellax-speed="5">
                    <FaCss3Alt />
                </span>
                <span className="rellax absolute z-50 bottom-20 left-1/12" data-rellax-speed="7">
                    <FaFigma />
                </span>
                <span className="rellax absolute bottom-10 left-8/12" data-rellax-speed="3">
                    <FaGit />
                </span>
                <span className="rellax absolute z-50 bottom-52 right-1/12" data-rellax-speed="4">
                    <FaGithub />
                </span>
                <span className="rellax absolute z-50 bottom-12 left-11/12" data-rellax-speed="8">
                    <FaHtml5 />
                </span>
                <span className="rellax absolute bottom-40 left-7/12" data-rellax-speed="10">
                    <DiJqueryLogo />
                </span>
                <span className="rellax absolute -bottom-64 left-3/12" data-rellax-speed="8">
                    <FaJs />
                </span>
                <span className="rellax absolute z-50 bottom-24 left-5/12" data-rellax-speed="2">
                    <DiMysql />
                </span>
                <span className="rellax absolute -bottom-32 left-8/12" data-rellax-speed="9">
                    <FaPhp />
                </span>
                <span className="rellax absolute z-50 -bottom-1 left-10/12" data-rellax-speed="7">
                    <SiPhpmyadmin />
                </span>
                <span className="rellax absolute bottom-9 left-4/12" data-rellax-speed="1">
                    <FaReact />
                </span>
                <span className="rellax absolute z-50 bottom-0 left-6/12" data-rellax-speed="2">
                    <FaSass />
                </span>
                <span className="rellax absolute -bottom-28 left-11/12" data-rellax-speed="5">
                    <SiTailwindcss />
                </span>
                <span className="rellax absolute z-50 bottom-64 left-4/12" data-rellax-speed="6">
                    <FaWordpress />
                </span>
            </div>
            <img src="/img/hero-pattern.svg" className="rellax absolute -bottom-32 md:-bottom-full md:-right-24 scale-[2] md:scale-[6] opacity-100 hidden md:block -z-20" data-rellax-speed="-2" alt="" />
            <img src="/img/hero-pattern.svg" className="rellax absolute -top-32 bottom-auto md:top-auto md:-bottom-80 lg:-bottom-[30rem] md:-right-24 scale-[2] md:scale-[6] opacity-25 -z-10" data-rellax-speed="-5" alt="" />
        </div>
    )
}