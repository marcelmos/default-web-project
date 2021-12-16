import { TemplateIcon, ArrowDownIcon } from '@heroicons/react/outline';

export default function Homepage(){
    return(
        <main className='-mt-10'>
            <section className="px-24 py-24 h-full max-h-screen">
                <div className="grid grid-cols-2">
                    <div data-depth="0.2" className="flex flex-col justify-center w-2/3 h-2/3">
                        <h2 className="text-8xl text-amber-400">Welcome!</h2>
                        <hr className='opacity-50 py-2' />
                        <p className="text-4xl">Welcome on my <span className="font-bold text-amber-400">Default Web</span></p>
                    </div>
                    <div data-depth="0.6" className="relative">
                        <img src="photo.png" className='h-1/2' alt="img" />
                    </div>
                </div>

                <a href="#" className='absolute bottom-10 left-0 right-0 flex justify-center'><ArrowDownIcon className='w-10 animate-bounce' /></a>
            </section>

            <section className="bg-slate-900 min-h-screen py-12 px-24 flex flex-col items-center">
                <h2 className='text-3xl'>Wanna see some of my projects?</h2>

                <div className="grid grid-cols-2">
                    <div className="">
                        <TemplateIcon className='w-64' />
                    </div>
                    <div className="">
                        <p className=''>
                            <a href="https://github.com/marcelmos">Check out my GitHub Account</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}