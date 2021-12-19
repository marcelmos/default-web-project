import { ArrowDownIcon } from '@heroicons/react/outline';
import Card from '../components/Card';
import FormSection from '../components/FormSection';

export default function Homepage(){
    return(
        <main className='-mt-[90px]'>
            <section className="px-24 py-24 h-full max-h-screen">
                <div className="grid grid-cols-2 max-h-screen">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-medium text-7xl border-l-[20px] border-yellow-400 pl-4 pt-2">Hi, I'm Marcel<br />a <span className='text-yellow-400'>web developer</span><br/>from <span className='italic font-light'>Poland!</span>👋</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="photo.png" className='h-1/2 max-h-screen' alt="img" />
                    </div>
                </div>

                <a href="#" className='absolute bottom-10 left-0 right-0 flex justify-center'><ArrowDownIcon className='w-10 animate-bounce' /></a>
            </section>

            <section className="bg-coal-600 py-20 px-24">
                <h2 className='text-6xl border-l-8 border-yellow-400 font-bold pl-4'>Projects</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className="py-20 px-24">
                <h2 className='text-6xl border-l-8 border-yellow-400 font-bold pl-4'>FAQ</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">

                </div>
            </section>

            <section className="bg-coal-600 py-20 px-24">
                <h2 className='text-6xl border-l-8 border-yellow-400 font-bold pl-4'>About Me</h2>

                <div className="grid grid-cols-3 gap-7 mt-8">

                </div>
            </section>

            <FormSection />
        </main>
    );
}