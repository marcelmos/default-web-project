

export default function FormSection(){

    return(
        <section id="contact-section" className="py-20 px-24">
            <div className="max-w-3xl flex flex-col justify-center mx-auto">
                <h2 className='text-6xl'>Interested?</h2>
                <p className='text-4xl'>Just <span className="text-yellow-400">send message</span> to me and let’s start <span className="italic text-yellow-400">talking...</span></p>

                <form action="" className="flex flex-col">
                    <label><input type="email" className='form-input' placeholder="E-mail" /></label>
                    <label><input type="text" className='form-input' placeholder="Topic" /></label>
                    <label><textarea cols="30" rows="10" className='form-input' placeholder="Your message..."></textarea></label>
                    <label><input type="checkbox" /></label>
                    <label><input type="submit" /></label>
                </form>
            </div>
        </section>
    );
}