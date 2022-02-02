import React from "react";
import { ExternalLinkIcon, XIcon, UserIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/outline";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaPhp, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { DiMysql, DiJqueryLogo } from "react-icons/di";
import { SiPhpmyadmin, SiTailwindcss } from "react-icons/si";


export default function AboutMe(){
    // Section Logic
    const openContent = (data, target) => {
        const contentWrapper = document.querySelector('.about-us__content-wrapper');
        const contentBtns = document.querySelectorAll('#about-me-section .about-us__btn');
        const show = document.querySelector(`.about-us__content[data-label="content-${data}"]`);

        contentWrapper.querySelectorAll('.about-us__content').forEach(el => {
            el.classList.remove('show-element');
            target.remove('selected');
        });

        contentBtns.forEach(el => {
            el.classList.remove('selected');
        })

        target.add('selected');
        show.classList.add('show-element');
    }

    // Experience tabs logic and data
    const experienceData = [
        {
            question: <React.Fragment><span className="text-yellow-400">Junior Web Developer</span> | June 2021 - January 2022 | WebWolf</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Frontend developer in group projects</li>
                    <li>Development of existing projects with new functionalities</li>
                    <li>Active communication with clients for project development purpose</li>
                </ul>
                <h3>Completed projects:</h3>
                <ul>
                    <li><a href="https://flixapple.com/" target="_blank" rel="noreferrer" className="external-link"><ExternalLinkIcon className="w-4 inline" /> flixapple.com</a></li>
                    <li><a href="https://www.eukc.pl/" target="_blank" rel="noreferrer" className="external-link"><ExternalLinkIcon className="w-4 inline" /> eukc.pl</a></li>
                    <li><a href="https://www.paramed-group.pl/" target="_blank" rel="noreferrer" className="external-link"><ExternalLinkIcon className="w-4 inline" /> paramed-group.pl</a></li>
                </ul></React.Fragment>,
        },
        {
            question: <React.Fragment><span className="text-yellow-400">IT Specialis</span> | March 2021 - April 2021 | Rozbark-Net</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Managing and administering the Internet network along with the service of personal computers</li>
                    <li>Contact and service for individual clients and companies</li>
                </ul></React.Fragment>,
        },
        {
            question: <React.Fragment><span className="text-yellow-400">Seasonal worker and Trainee</span> | Seasonal worker (2019 - 3 months), Trainee (2018 - 1 month) | Frodo</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Work on CMS systems and Adobe programs</li>
                    <li>Working with HTML / CSS / JS / Bootstrap technology</li>
                    <li> Create an interactive presentation using Hype Pro 4</li>
                </ul></React.Fragment>,
        },
        {
            question: <React.Fragment><span className="text-yellow-400">Intern</span> | 2019 (1 month) | Rozbark-Net</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Servicing of personal computers</li>
                    <li>Work with infrastructure and network devices</li>
                </ul></React.Fragment>,
        },
    ]

    // Experience tabs logic
    const onShow = (index) => {
        const div = document.querySelector(`.experience-details[data-key='details-${index}']`);

        if(div.classList.contains('show')){
            div.classList.remove('show');
        }else{
            div.classList.add('show');
        }
    }


    // Render Section
    return(
        <section id="about-me-section" className="py-20 px-5 md:px-24">
            <h2 className='section-header'><span className="animate-on-scroll vertical-line"></span>About Me</h2>

            <div className="content__wrapper flex flex-col lg:flex-row mt-8 md:min-h-700">
                <div className="bg-white bg-opacity-20 px-5 sm:px-8 py-10 sm:py-15  mr-5 w-full lg:w-2/5 xl:w-1/4 rounded-2xl">
                    <div className="sticky top-40 flex flex-col justify-start">
                        {/* <div className="self-center mb-5">
                            <img src="/img/tempImg.jpg" alt="" className="bg-gray-400 aspect-square blur-sm border-4 border-light w-250 max-w-250 max-h-250 object-cover rounded-full" />
                            <h2 className="text-4xl mt-5 text-center">Marcel Moś</h2>
                        </div> */}

                        <div className="hidden sm:block">
                            <h3 className="about-us__btn selected" onClick={(event) => openContent('about-me', event.target.classList)}><UserIcon className="w-10 h-10" /> Introduction</h3>
                            <h3 className="about-us__btn" onClick={(event) => openContent('skills', event.target.classList)}><AcademicCapIcon className="w-10 h-10" />Skills</h3>
                            <h3 className="about-us__btn" onClick={(event) => openContent('experience', event.target.classList)}><BriefcaseIcon className="w-10 h-10" /> Experience</h3>
                        </div>

                        <div className="block sm:hidden">
                            <a href="#about-us__content" className="about-us__btn selected" onClick={(event) => openContent('about-me', event.target.classList)}><UserIcon className="w-10 h-10" /> Introduction</a>
                            <a href="#about-us__content" className="about-us__btn" onClick={(event) => openContent('skills', event.target.classList)}><AcademicCapIcon className="w-10 h-10" />Skills</a>
                            <a href="#about-us__content" className="about-us__btn" onClick={(event) => openContent('experience', event.target.classList)}><BriefcaseIcon className="w-10 h-10" /> Experience</a>
                        </div>
                    </div>
                </div>

                <div id="about-us__content" className="about-us__content-wrapper bg-white bg-opacity-20 p-5 sm:px-8 md:px-10 lg:px-15 py-6 md:py-10 mt-5 lg:mt-0 w-full lg:w-3/5 xl:w-3/4 rounded-2xl">
                    <div className="about-us__content show-element" data-label="content-about-me">
                        <p>
                            Hi! I'm Marcel, a self tought programmer interested and working as a Web Developer, mainly focused in Frontend technologies.
                        </p>
                        <p>
                            I like playing computer games and made attempts to create my own in Unity engine.
                        </p>
                        <p>
                            In free time I like to create my own projects with new, popular and interesting technologies, frameworks and libralies
                            such as React, Tailwind, Slick JS and more. This very website is one of my projects.
                        </p>
                        <p>
                            But my life is not all about coding.<br />
                            I like to draw digitally or traditionaly, watch videos on YouTube or in streaming services and of course listening music without this I can't live.
                        </p>
                    </div>

                    <div className="about-us__content" data-label="content-skills">
                        <h3 className="text-xl">I use following technologies in project I work on:</h3>
                        <ul className="list-blocks">
                            <li>
                                <FaHtml5 />
                                <p>HTML</p>
                            </li>
                            <li>
                                <span><FaCss3Alt /> / <FaSass /></span>
                                <p>CSS/SASS</p>
                            </li>
                            <li>
                                <FaJs />
                                <p>JavaScript</p>
                            </li>
                            <li>
                            <span><FaPhp /> / <DiMysql /></span>
                                <p>PHP + MySQL</p>
                            </li>
                            <li>
                                <FaBootstrap />
                                <p>Bootstrap</p>
                            </li>
                            <li>
                                <SiTailwindcss />
                                <p>Tailwind CSS</p>
                            </li>
                            <li>
                                <FaWordpress />
                                <p>WordPress</p>
                            </li>
                            <li>
                                <DiJqueryLogo />
                                <p>jQuery</p>
                            </li>
                            <li>
                                <FaReact />
                                <p>React</p>
                            </li>
                        </ul>

                        <h3 className="text-xl mt-5">The tools I use:</h3>
                        <ul className="list-blocks">
                            <li>
                                <FaGit />
                                <p>GIT</p>
                            </li>
                            <li>
                                <FaGithub />
                                <p>GitHub</p>
                            </li>
                            <li>
                                <SiPhpmyadmin />
                                <p>phpMyAdmin</p>
                            </li>
                            <li>
                                <FaFigma />
                                <p>Figma</p>
                            </li>
                        </ul>

                        <h3 className="text-xl mt-5">I know Adobe and Affinity softwares as well.</h3>
                        <ul>
                            <li><strong>Adobe:</strong>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>XD</li>
                                </ul>
                            </li>
                            <li><strong>Affinity:</strong>
                                <ul>
                                    <li>Photo</li>
                                    <li>Designer</li>
                                    <li>Publisher</li>
                                </ul>
                            </li>
                        </ul>

                        <h3 className="text-xl mt-5">Other Information:</h3>
                        <ul>
                            <li>I have a Driver's license (category B),</li>
                            <li>I can communicate fluently in English</li>
                        </ul>

                    </div>

                    <div className="about-us__content" data-label="content-experience">
                        <div className="faq-wrapper mt-10">
                            { experienceData.map((el, index) => {
                                    return(
                                        <div key={index}>
                                            <div key={`conpany-${index}`} className={`experience-company relative ${(index === 0) ? 'opend' : ''}`}
                                            onClick={(event) =>{
                                                const el = event.target;
                                                onShow(index);

                                                if(el.classList.contains('opend')){
                                                    el.classList.remove('opend');
                                                }else{
                                                    el.classList.add('opend');
                                                }
                                            }}>
                                                { el.question } <span className="absolute right-2"><XIcon className="w-6 h-6" /></span>
                                            </div>
                                            <div key={`conpany_details-${index}`} className={`experience-details font-normal ${(index === 0) ? 'show' : ''}`} data-key={`details-${index}`}>{ el.answear }</div>
                                        </div>
                                    );
                                }) }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}