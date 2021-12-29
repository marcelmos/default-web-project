import Card from '../Card';


export default function Projects(){

    return(
        <section id="projects-section" className="bg-coal-600 py-20 px-24">
            <h2 className='section-header'>Projects</h2>

            <div className="grid grid-cols-3 gap-7 mt-8">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}