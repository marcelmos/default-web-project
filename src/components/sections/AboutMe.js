import React from "react";
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/outline";

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

    /**
     * NOTE FOR ME
     * Clean up this mess below... make this element as reusable Component like Card.js component
     */

    // Experience tabs logic and data
    const faqData = [
        {
            question: <React.Fragment><span className="text-yellow-400">Junior Web Developer</span> | WebWolf | June 2021 - currently</React.Fragment>,
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
            question: <React.Fragment><span className="text-yellow-400">IT Specialis</span> | Rozbark-Net | March 2021 - April 2021</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Managing and administering the Internet network along with the service of personal computers</li>
                    <li>Contact and service for individual clients and companies</li>
                </ul></React.Fragment>,
        },
        {
            question: <React.Fragment><span className="text-yellow-400">Seasonal worker and Trainee</span> | Frodo | Seasonal worker (2019 - 3 months), Trainee (2018 - 1 month)</React.Fragment>,
            answear: <React.Fragment>
                <h3>My tasks:</h3>
                <ul>
                    <li>Work on CMS systems and Adobe programs</li>
                    <li>Working with HTML / CSS / JS / Bootstrap technology</li>
                    <li> Create an interactive presentation using Hype Pro 4</li>
                </ul></React.Fragment>,
        },
        {
            question: <React.Fragment><span className="text-yellow-400">Intern</span> | Rozbark-Net | 2019 (1 month)</React.Fragment>,
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

            <div className="flex flex-col md:flex-row mt-8 md:h-700">
                <div className="bg-white bg-opacity-20 flex flex-col justify-start p-5 sm:p-8 mr-5 w-full md:w-2/5 lg:w-1/4 rounded-2xl min-h-full">
                    <div className="self-center">
                        <img src="/img/tempImg.jpg" alt="" className="bg-gray-400 border-4 border-light w-250 h-250 max-w-250 max-h-250 object-cover rounded-full" />
                        <h2 className="text-4xl mt-5 text-center">Marcel Moś</h2>
                    </div>

                    <div className="mt-8">
                        <h3 className="about-us__btn selected" onClick={(event) => openContent('about-me', event.target.classList)}>Introduction <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></h3>
                        <h3 className="about-us__btn" onClick={(event) => openContent('skills', event.target.classList)}>Skills <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></h3>
                        <h3 className="about-us__btn" onClick={(event) => openContent('experience', event.target.classList)}>Experience <ChevronRightIcon className="w-10 h-10 " /></h3>
                    </div>

                </div>

                <div className="about-us__content-wrapper bg-white bg-opacity-20 p-5 sm:px-8 md:px-10 lg:px-15 py-6 md:py-10 mt-5 md:mt-0 w-full md:w-3/5 lg:w-3/4 rounded-2xl min-h-full overflow-y-auto">
                    <div className="about-us__content show-element" data-label="content-about-me">
                        <p>
                            Hi! I'm Marcel, a self tought programmer interested and working as a Web Developer, mainly interested in Frontend technologies.
                        </p>
                        <p>
                            I'm also like Games, coupple of times I've tried to create my own game with use of Unity Engine, a fiew of most popular Game Engines.
                        </p>
                        <p>
                            In free time I like to create my own projects with use of new for me, popular and interesting technologies,
                            frameworks and libralies like React or Tailwind. One of this project is this web site.
                        </p>
                        <p>
                            But I also like to do something different not only programming or coding.<br/>
                            I like to draw digital arts, watching videos on YouTube or in VOD services, playing video games and of course listening music without this I can't live.
                        </p>
                    </div>

                    <div className="about-us__content" data-label="content-skills">
                        <h3 className="text-xl">A technologies known to me which I use in my projects and job:</h3>
                        <ul className="list-blocks">
                            <li>
                                <img src="/img/brands/html.svg" alt="" />
                                <p>HTML</p>
                            </li>
                            <li>
                                <span><img src="/img/brands/css.svg" alt="" /> / <img src="/img/brands/sass.svg" alt="" /></span>
                                <p>CSS/SASS</p>
                            </li>
                            <li>
                                <img src="/img/brands/js.svg" alt="" />
                                <p>JavaScript</p>
                            </li>
                            <li>
                            <span><img src="/img/brands/php.svg" alt="" /> / <img src="/img/brands/mysql.svg" alt="" /></span>
                                <p>PHP + MySQL</p>
                            </li>
                            <li>
                                <img src="/img/brands/bootstrap.svg" alt="" />
                                <p>Bootstrap</p>
                            </li>
                            <li>
                                <img src="/img/brands/tailwindcss.svg" className="negative" alt="" />
                                <p>Tailwind CSS</p>
                            </li>
                            <li>
                                <img src="/img/brands/wordpress.svg" alt="" />
                                <p>WordPress</p>
                            </li>
                            <li>
                                <img src="/img/brands/jquery.svg" alt="" />
                                <p>jQuery</p>
                            </li>
                            <li>
                                <img src="/img/brands/react.svg" alt="" />
                                <p>React</p>
                            </li>
                        </ul>
                        
                        <h3 className="text-xl mt-5">Tools known to me are:</h3>
                        <ul className="list-blocks">
                            <li>
                                <img src="/img/brands/git.svg" alt="" />
                                <p>GIT</p>
                            </li>
                            <li>
                                <img src="/img/brands/github.svg" alt="" />
                                <p>GitHub</p>
                            </li>
                            <li>
                                <img src="/img/brands/phpmyadmin.svg" className="negative" alt="" />
                                <p>phpMyAdmin</p>
                            </li>
                            <li>
                                <img src="/img/brands/figma.svg" alt="" />
                                <p>Figma</p>
                            </li>
                        </ul>

                        <h3 className="text-xl mt-5">Also I know Adobe and Affinity softwares.</h3>
                        Adobe:
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>XD</li>
                        </ul>
                        
                        Affinity: 
                        <ul>
                            <li>Photo</li>
                            <li>Designer</li>
                            <li>Publisher</li>
                        </ul>
                        
                        <p>With less relevant information I also had Driving licence (category B), and of course I can speak in English (Advanced)</p>

                    </div>

                    <div className="about-us__content" data-label="content-experience">
                        <p>
                            My experience is't big soo probably i fit with then in fiew lines:
                        </p>
                        <div className="faq-wrapper mt-10">
                            { faqData.map((el, index) => {
                                    return(
                                        <>
                                            <div key={`conpany-${index}`} className="experience-company"
                                            onClick={(event) =>{
                                                onShow(index);

                                                if(event.target.classList.contains('opend')){
                                                    event.target.classList.remove('opend');
                                                }else{
                                                    event.target.classList.add('opend');
                                                }
                                            }}>
                                                { el.question }
                                            </div>
                                            <div key={`conpany_details-${index}`} className="experience-details font-normal" data-key={`details-${index}`}>{ el.answear }</div>
                                        </>
                                    );
                                }) }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}