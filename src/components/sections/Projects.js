import Card from '../Card';


export default function Projects(){

    // Card datas
    const firstCard = {
        image: '',
        title: 'Tytuł pierwszego elementu',
        description: 'Opis karty. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum doloribus voluptatum, fugiat odio amet sapiente esse facere, tenetur repellendus recusandae tempore, voluptate laborum consequuntur vel impedit optio fugit! Dolor, tempore? ',
        link: 'http://defaultweb.epizy.com/'
    };
    const secoundCard = {
        image: '',
        title: 'Tytuł drugiegp elementu',
        description: 'Opis karty. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum doloribus voluptatum, fugiat odio amet sapiente esse facere, tenetur repellendus recusandae tempore, voluptate laborum consequuntur vel impedit optio fugit! Dolor, tempore? ',
        link: 'http://defaultweb.epizy.com/'
    };
    const thirdCard = {
        image: '',
        title: 'Tytuł trzeciego elementu',
        description: 'Opis karty. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum doloribus voluptatum, fugiat odio amet sapiente esse facere, tenetur repellendus recusandae tempore, voluptate laborum consequuntur vel impedit optio fugit! Dolor, tempore? ',
        link: 'http://defaultweb.epizy.com/'
    };

    // Render Section
    return(
        <section id="projects-section" className="bg-coal-600 py-20 px-24">
            <h2 className='section-header'>Projects</h2>

            <div className="grid grid-cols-3 gap-7 mt-8">
                <Card cardContent={ firstCard } />
                <Card cardContent={ secoundCard } />
                <Card cardContent={ thirdCard } />
            </div>
        </section>
    );
}