import React from "react";
import { CodeIcon } from "@heroicons/react/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer( props ){

    const navLinks = props.navData;


    return(
        <footer className="bg-coal-700">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 px-2 md:px-32 py-11">
                <div className="">
                    <a href="/" className="nav-logo"><img src="/img/logo.svg" alt="default-web-logo" className="max-h-15" /></a>
                </div>
                <div className="hidden md:block"></div>
                <div className="">
                    <ul className="font-light">
                    {
                        navLinks.map((el, index) => {
                            return <li key={`footer_nav-${index}`} className=""><a href={`/#${el.link}`}>{el.title}</a></li>;
                        })
                    }
                    </ul>
                </div>
                <div className="flex flex-col justify-between">
                    <ul>
                        <li className="text-right sm:text-left">
                            <a href="https://www.linkedin.com/in/marcel-mos/" target="_blank" rel="noreferrer" className="flex">
                                <FaLinkedin className="w-6 h-6 mr-2" />
                                <span className="hidden sm:block">Linkedin</span>
                            </a>
                        </li>
                        <li className="text-right sm:text-left">
                            <a href="https://github.com/marcelmos" target="_blank" rel="noreferrer" className="flex">
                                <FaGithub className="w-6 h-6 mr-2" />
                                <span className="hidden sm:block">GitHub</span>
                            </a>
                        </li>
                    </ul>
                    <p className="text-sm mt-5 ml-5 hidden md:block">
                        <a href="https://github.com/marcelmos/default-web-project" target="_blank" rel="noreferrer" className="flex hover:text-yellow-400">
                            <CodeIcon className="w-5 mr-2" />
                            Check page source code
                        </a>
                    </p>
                </div>
                <p className="text-sm mt-5 col-start-2 col-end-4 text-left block md:hidden">
                    <a href="https://github.com/marcelmos/default-web-project" target="_blank" rel="noreferrer" className="flex hover:text-yellow-400">
                        <CodeIcon className="w-5 mr-2" />
                        Check page source code
                    </a>
                </p>
            </div>
            <div className="bg-neutral-900 py-2 text-center"><span className="opacity-40">Designed and developed by Marcel Moś © {new Date().getFullYear()}</span></div>
        </footer>
    );
}