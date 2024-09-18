import React from "react";
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function Card( props ){
    const { image, title, description, link } = props.cardContent;

    return(
        <div className="card py-4 md:py-5 lg:py-7 px-4 md:px-6 lg:px-8 bg-coal-400 rounded-2xl w-full max-w-400 flex flex-col justify-between">
            <div>
                <img src={image ? image : '/img/placeholder-image.png'} className='bg-slate-400 rounded-2xl h-48 w-full object-cover' alt="" />
                <div className='text-white opacity-20 border-b-4 my-4'></div>
                <h3 className='text-4xl mb-3'>{ title }</h3>
                <p className='opacity-60'>{ description }</p>
            </div>
            <a href={ link ? link : 'https://github.com/marcelmos' } target="_blank" rel="noreferrer" className="bg-yellow-400 hover:bg-yellow-500 max-w-fit text-coal-500 text-base md:text-xl mt-10 mx-auto sm:ml-auto sm:mr-0 px-6 py-4 max-h-15 rounded-full font-bold flex justify-around items-center whitespace-nowrap">{link ? 'Check out project' : 'Check GitHub projects'} <ArrowRightIcon className='w-8 ml-3' /></a>
        </div>
    );
}