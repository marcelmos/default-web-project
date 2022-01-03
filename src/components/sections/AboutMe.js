import { ChevronRightIcon } from "@heroicons/react/outline";

export default function AboutMe(){
    // Section Logic
    const openContent = (data, target) => {
        const contentWrapper = document.querySelector('.about-us__content-wrapper');
        const show = document.querySelector(`.about-us__content[data-label="content-${data}"]`);

        contentWrapper.querySelectorAll('.about-us__content').forEach(el => {
            el.classList.remove('show-element');
            target.remove('selected');
        });
        
        document.
        
        target.add('selected');
        show.classList.add('show-element');


    }


    // Render Section
    return(
        <section id="about-me-section" className="bg-coal-600 py-20 px-24">
            <h2 className='section-header'>About Me</h2>

            <div className="flex mt-8 max-h-800">
                <div className="bg-white bg-opacity-20 flex flex-col p-8 mr-5 w-1/3 rounded-2xl min-h-full">
                    <img src="/img/tempImg.jpg" alt="" className="bg-gray-400 border-8 border-light w-full h-full max-w-250 max-h-250 object-cover rounded-full" />

                    <div className="mt-16">
                        <p className="about-us__btn" onClick={(event) => openContent('about-me', event.target.classList)}>Tekst <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></p>
                        <p className="about-us__btn" onClick={(event) => openContent('technologies', event.target.classList)}>Technologies <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></p>
                        <p className="about-us__btn" onClick={(event) => openContent('tools', event.target.classList)}>Tools <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></p>
                        <p className="about-us__btn" onClick={(event) => openContent('other', event.target.classList)}>Other <ChevronRightIcon className="w-10 h-10 text-yellow-400" /></p>
                    </div>

                </div>

                <div className="about-us__content-wrapper bg-white bg-opacity-20 p-8 w-2/3 rounded-2xl min-h-full overflow-y-auto">                    
                    <p className="about-us__content show-element" data-label="content-about-me">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                    </p>

                    <p className="about-us__content" data-label="content-technologies">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                    </p>

                    <p className="about-us__content" data-label="content-tools">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>

                    <p className="about-us__content" data-label="content-other">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi, unde veritatis atque, laboriosam pariatur minima optio itaque incidunt accusamus aliquam! Veniam voluptates odit quas corporis atque et eum itaque?
                    </p>
                </div>
            </div>
        </section>
    );
}