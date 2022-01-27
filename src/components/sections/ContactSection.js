

export default function ContactSection(){

    // const fitContent = (el) => {
    //     console.log(el);
    //     el.style.height = "1px";
    //     el.style.height = (25+el.scrollHeight) + "px";
    // };

    return(
        <section id="contact-section" className="py-20 px-5 md:px-24">
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
        </section>
    );
}