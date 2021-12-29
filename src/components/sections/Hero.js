import { ArrowDownIcon } from "@heroicons/react/outline";


export default function Hero() {
    return(
        <section id="home-section" className="px-12 xl:px-24 py-24 h-full min-h-screen max-h-screen bg-hero-pattern bg-right-bottom bg-no-repeat md:bg-opacity-25 flex flex-col justify-center">
            <div className="grid grid-cols-2 max-h-screen">
                <div className="flex flex-col justify-center">
                    <h2 className="font-medium text-5xl lg:text-6xl 2xl:text-7xl border-l-[20px] border-yellow-400 px-4 pt-2 whitespace-nowrap">Hi, I'm Marcel<br />a <span className='text-yellow-400'>web developer</span><br/>from <span className='italic font-light'>Poland! </span>👋</h2>
                    <span className="h-1/2 border-r-4 md:border-r-white border-r-transparent absolute left-1/2 right-1/2"></span>
                </div>
                <div className="flex items-center justify-center [ relative ]">
                    <span className="[ absolute text-7xl rotate-45 opacity-80 text-red-500 ]">TEMP IMAGE</span>
                    <img src="/img/tempImg.jpg" className='' alt="img" />
                </div>
            </div>

            <a href="#projects-section" className='absolute bottom-10 left-0 right-0 flex justify-center'><ArrowDownIcon className='w-10 animate-bounce' /></a>
        </section>
    );
}