import { ArrowDownIcon } from '@heroicons/react/outline';
import Card from '../components/Card';
import FormSection from '../components/FormSection';

export default function Homepage(){
    return(
        <main className='-mt-[90px]'>
            <section className="px-12 xl:px-24 pb-24 h-full max-h-screen bg-hero-pattern bg-right-bottom bg-no-repeat">
                <div className="grid grid-cols-2 max-h-screen">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-medium text-5xl xl:text-7xl border-l-[20px] border-yellow-400 px-4 pt-2 whitespace-nowrap">Hi, I'm TWOJA STARA<br />a <span className='text-yellow-400'>web developer</span><br/>from <span className='italic font-light'>Poland!</span>👋</h2>
                        <span className="h-1/2 border-r-4 border-r-white absolute left-1/2 right-1/2"></span>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/img/photo.png" className='h-1/2 max-h-screen' alt="img" />
                    </div>
                </div>

                <a href="#" className='absolute bottom-10 left-0 right-0 flex justify-center'><ArrowDownIcon className='w-10 animate-bounce' /></a>
            </section>

            <section className="bg-coal-600 py-20 px-24">
                <h2 className='section-header'>Projects</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className="py-20 px-24">
                <h2 className='section-header'>FAQ</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">

                </div>
            </section>

            <section className="bg-coal-600 py-20 px-24">
                <h2 className='section-header'>About Me</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">

                </div>
            </section>

            <FormSection />
        </main>
    );
}