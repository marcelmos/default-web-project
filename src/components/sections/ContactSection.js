

export default function ContactSection(){

    // const fitContent = (el) => {
    //     console.log(el);
    //     el.style.height = "1px";
    //     el.style.height = (25+el.scrollHeight) + "px";
    // };

    return(
        <section id="contact-section" className="cta-rellax pt-20 sm:pt-40 pb-32 md:pb-[450px] px-5 sm:px-12 md:px-24 relative overflow-y-hidden">
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

            <div className="contact-section__decoration absolute left-0 right-0 bottom-0 md:-bottom-5">
                <svg id="visual" viewBox="0 0 900 600" className="min-w-full" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path className="rellax" data-rellax-speed="10" d="M0 362L21.5 367.2C43 372.3 86 382.7 128.8 393.3C171.7 404 214.3 415 257.2 408.3C300 401.7 343 377.3 385.8 380.8C428.7 384.3 471.3 415.7 514.2 430.8C557 446 600 445 642.8 444.2C685.7 443.3 728.3 442.7 771.2 430C814 417.3 857 392.7 878.5 380.3L900 368L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#facc15"></path>
                    <path className="rellax" data-rellax-speed="8" d="M0 445L21.5 436.3C43 427.7 86 410.3 128.8 415.3C171.7 420.3 214.3 447.7 257.2 449.8C300 452 343 429 385.8 416.5C428.7 404 471.3 402 514.2 408.7C557 415.3 600 430.7 642.8 440.8C685.7 451 728.3 456 771.2 458.3C814 460.7 857 460.3 878.5 460.2L900 460L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#e38b37"></path>
                    <path className="rellax" data-rellax-speed="6" d="M0 449L21.5 452.5C43 456 86 463 128.8 470.8C171.7 478.7 214.3 487.3 257.2 493C300 498.7 343 501.3 385.8 500.5C428.7 499.7 471.3 495.3 514.2 488.3C557 481.3 600 471.7 642.8 463.2C685.7 454.7 728.3 447.3 771.2 454.5C814 461.7 857 483.3 878.5 494.2L900 505L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#ae5945"></path>
                    <path className="rellax" data-rellax-speed="4" d="M0 535L21.5 531.2C43 527.3 86 519.7 128.8 519.3C171.7 519 214.3 526 257.2 521.5C300 517 343 501 385.8 495C428.7 489 471.3 493 514.2 500C557 507 600 517 642.8 514.3C685.7 511.7 728.3 496.3 771.2 489.7C814 483 857 485 878.5 486L900 487L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#68383e"></path>
                    <path className="rellax" data-rellax-speed="2" d="M0 531L21.5 534.2C43 537.3 86 543.7 128.8 547.2C171.7 550.7 214.3 551.3 257.2 551C300 550.7 343 549.3 385.8 548.5C428.7 547.7 471.3 547.3 514.2 543.3C557 539.3 600 531.7 642.8 528C685.7 524.3 728.3 524.7 771.2 527.3C814 530 857 535 878.5 537.5L900 540L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#231e20"></path>
                </svg>
            </div>
        </section>
    );
}