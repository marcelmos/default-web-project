import React from "react";

export default function ContactSection(){

    // const fitContent = (el) => {
    //     console.log(el);
    //     el.style.height = "1px";
    //     el.style.height = (25+el.scrollHeight) + "px";
    // };

    return(
        <section id="contact-section" className="pt-20 sm:pt-40 pb-24 sm:pb-48 xl:pb-96 px-5 sm:px-12 md:px-24 relative overflow-y-hidden">
        {/* <section id="contact-section" className="pt-40 pb-[500px] px-5 sm:px-12 md:px-24 bg-waves-bottom-dark bg-bottom bg-no-repeat bg-cover"> */}
            <div className="max-w-3xl flex flex-col justify-center mx-auto">
                <h2 className='text-5xl sm:text-6xl mb-4 font-bold'>Interested?</h2>
                <p className='text-2xl'>Just send message to me at <span className="text-yellow-400 hover:text-yellow-500 hover:cursor-pointer"><a href="mailto:mosmarcel00@gmail.com">mosmarcel00@gmail.com</a></span> and let’s start talking...</p>

                {/* <form action="" className="flex flex-col">
                    <label><input type="email" className='form-input' placeholder="E-mail" /></label>
                    <label><input type="text" className='form-input' placeholder="Topic" /></label>
                    <label><textarea className='form-input' onInput={ (event) => fitContent(event.target) } placeholder="Your message..."></textarea></label>
                    <label><input type="checkbox" className="" /> I give access to all datas inserted inside form into contact purpouse with me and other activities typed by my person inside message content. </label>
                    <label><input type="submit" className="px-6 py-3 mt-5 bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-coal-500 font-bold rounded-full" value="Send message" /></label>
                </form> */}
            </div>

            <div className="contact-section__decoration overflow-y-visible absolute left-0 right-0 -bottom-2 md:-bottom-12">
                <svg id="visual" className="min-w-full overflow-y-visible" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path className="rellax" data-rellax-speed="4" d="M0 45L15 41.2C30 37.3 60 29.7 90 35.3C120 41 150 60 180 63C210 66 240 53 270 47.8C300 42.7 330 45.3 360 43.7C390 42 420 36 450 36.2C480 36.3 510 42.7 540 43.7C570 44.7 600 40.3 630 45.2C660 50 690 64 720 63.3C750 62.7 780 47.3 810 39.5C840 31.7 870 31.3 885 31.2L900 31L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#facc15"></path>
                    <path className="rellax" data-rellax-speed="3" d="M0 104L15 102.8C30 101.7 60 99.3 90 91C120 82.7 150 68.3 180 63.5C210 58.7 240 63.3 270 64.8C300 66.3 330 64.7 360 68.5C390 72.3 420 81.7 450 89.2C480 96.7 510 102.3 540 99.5C570 96.7 600 85.3 630 81C660 76.7 690 79.3 720 83C750 86.7 780 91.3 810 91.3C840 91.3 870 86.7 885 84.3L900 82L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#e38b37"></path>
                    <path className="rellax" data-rellax-speed="2" d="M0 110L15 111.5C30 113 60 116 90 111.7C120 107.3 150 95.7 180 98.7C210 101.7 240 119.3 270 125.5C300 131.7 330 126.3 360 118.2C390 110 420 99 450 94C480 89 510 90 540 97.5C570 105 600 119 630 121.5C660 124 690 115 720 108.2C750 101.3 780 96.7 810 99C840 101.3 870 110.7 885 115.3L900 120L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#ae5945"></path>
                    <path className="rellax" data-rellax-speed="1" d="M0 150L15 143.8C30 137.7 60 125.3 90 118.8C120 112.3 150 111.7 180 116.8C210 122 240 133 270 134.3C300 135.7 330 127.3 360 130.5C390 133.7 420 148.3 450 150.2C480 152 510 141 540 133.3C570 125.7 600 121.3 630 119.2C660 117 690 117 720 122.2C750 127.3 780 137.7 810 137.3C840 137 870 126 885 120.5L900 115L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#68383e"></path>
                    <path className="rellax" data-rellax-speed="0" d="M0 181L15 176.5C30 172 60 163 90 160.2C120 157.3 150 160.7 180 165.5C210 170.3 240 176.7 270 176C300 175.3 330 167.7 360 162.5C390 157.3 420 154.7 450 156C480 157.3 510 162.7 540 165.2C570 167.7 600 167.3 630 165.2C660 163 690 159 720 155.5C750 152 780 149 810 150.3C840 151.7 870 157.3 885 160.2L900 163L900 201L885 201C870 201 840 201 810 201C780 201 750 201 720 201C690 201 660 201 630 201C600 201 570 201 540 201C510 201 480 201 450 201C420 201 390 201 360 201C330 201 300 201 270 201C240 201 210 201 180 201C150 201 120 201 90 201C60 201 30 201 15 201L0 201Z" fill="#231e20"></path>
                </svg>
            </div>
        </section>
    );
}