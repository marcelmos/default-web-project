import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Rellax from "rellax";

export default function Navigation(props){
    const navLinks = props.navData;

    const mobileNav = () => {
        const menu = document.querySelector('#mobile-nav-panel');
        const hamburger = document.querySelector('.nav-hamburger');


        if(menu.classList.contains('manu-opend')){
            menu.classList.remove('manu-opend');
            hamburger.classList.remove('active');
        }else{
            menu.classList.add('manu-opend');
            hamburger.classList.add('active');
        }
    };

    useEffect(()=>{
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("#navigation ul li");
        const navLiMobile = document.querySelectorAll("#navigation-mobile ul li");
        window.onscroll = () => {
            var current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current+'-link')) {
                li.classList.add("active");
                }
            });

            navLiMobile.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current+'-link')) {
                li.classList.add("active");
                }
            });
        };
    }, []);

    return(

        <>
            <nav id="navigation" className="sticky top-0 max-h-[90px] px-11 py-4 bg-coal-600 text-xl bg-opacity-75 z-top hidden md:flex items-center justify-between">
                <a href="/" className="nav-logo"><img src="/img/logo.svg" alt="default-web-logo" className="max-h-15" /></a>
                <ul className="nav-list flex justify-center font-light max-w-[620px]">
                    {
                        navLinks.map((el, index) => {
                            return <li key={`nav_item-${index}`} className={`${el.link}-link px-4 mx-2 whitespace-nowrap w-full`}><a href={`/#${el.link}`} className="flex">{el.title}</a></li>;
                        })
                    }
                </ul>
                <a href="https://github.com/marcelmos" target="_blank" rel="noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-coal-500 px-3 lg:px-6 py-2 lg:py-4 max-h-15 rounded-full text-base lg:text-xl whitespace-nowrap font-bold flex items-center">
                    <span className="w-8 lg:w-10 mr-2 lg:mr-5 bg-white rounded-full">
                        <FaGithub className="w-10 h-10" />
                    </span>
                    Check out my GitHub
                    </a>
            </nav>


            <nav id="navigation-mobile" className="sticky top-0 max-h-[90px] px-5 py-4 bg-coal-600 text-xl bg-opacity-80 z-top block md:hidden">
                <div className="flex justify-between items-center relative z-50">
                    <a href="/" className="nav-logo"><img src="/img/logo.svg" alt="default-web-logo" className="max-h-15" /></a>
                    <button className="w-[50px] h-[50px] flex justify-center items-center" onClick={() => mobileNav()}><span className="nav-hamburger"></span></button>
                </div>

                <div id="mobile-nav-panel" className="" >
                    <div className="nav-panel w-screen min-h-full bg-coal-700 absolute flex flex-col justify-between pt-32">
                        <ul className="nav-list flex flex-col justify-center font-light">
                            {
                                navLinks.map((el, index) => {
                                    return <li key={`nav_item_mobile-${index}`} className={`${el.link}-link py-2 my-2`} onClick={() => mobileNav()}><a href={`/#${el.link}`}>{el.title}</a></li>;
                                })
                            }
                        </ul>
                        <a href="https://github.com/marcelmos" target="_blank" rel="noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-coal-500 px-6 py-4 mx-auto my-10 max-h-15 max-w-xs rounded-full font-bold flex items-center">
                            <span className="w-10 mr-5 bg-white rounded-full">
                                <FaGithub className="w-10 h-10" />
                            </span>
                            Check out my GitHub
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}