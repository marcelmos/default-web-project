import { ArrowRightIcon } from '@heroicons/react/outline';

export default function Card(){

    return(
        <div className="py-7 px-8 bg-coal-400 rounded-2xl w-full max-w-400">
            <img src="/img/placeholder-image.png" className='bg-slate-400 rounded-2xl max-h-48 w-full object-cover' alt="" />
            <div className='text-white opacity-20 border-b-4 my-4'></div>
            <h3 className='text-4xl mb-3'>Tytuł</h3>
            <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ut laborum iure necessitatibus perferendis pariatur nesciunt. Aspernatur sequi labore iure veritatis assumenda, quidem, corporis eaque voluptates saepe voluptatum atque quam?</p>
            <a href="" className="bg-yellow-400 hover:bg-yellow-500 max-w-fit text-coal-500 text-xl mt-5 px-6 py-4 max-h-15 rounded-full font-bold flex justify-around items-center whitespace-nowrap">Check out project <ArrowRightIcon className='w-8 ml-3' /></a>
        </div>
    );
}