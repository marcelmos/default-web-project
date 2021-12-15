import { TemplateIcon, ArrowDownIcon } from '@heroicons/react/outline';

export default function Homepage(){
    return(
        <main className='-mt-10'>
            <section className="px-24 py-24 min-h-screen max-h-screen">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-8xl text-amber-400">Welcome!</h2>
                        <hr className='opacity-50 py-2 w-10/12' />
                        <p className="text-4xl">Welcome on my <span className="font-bold text-amber-400">Default Web</span></p>
                    </div>
                    <div className="">
                        <img src="photo.png" alt="img" />
                    </div>
                </div>

                <a href="#" className='w-full flex justify-center'><ArrowDownIcon className='w-10 animate-bounce' /></a>
            </section>

            <section className="bg-slate-900 min-h-screen py-12 px-24 flex flex-col items-center">
                <h2 className='text-3xl'>Wanna see some of my projects?</h2>

                <div className="text-center">
                    <TemplateIcon className='w-64' />
                    <h3 className='text-4xl'>GitHub</h3>
                    <p className=''>
                        <a href="https://github.com/marcelmos">Check out my GitHub Account</a>
                    </p>
                </div>
            </section>
        </main>
    );
}