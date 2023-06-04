import Card from '../Card';


export default function Projects(){

    // Card datas
    const cardDatas = [
        {
            image: '/img/wp-todo-list-preview.png',
            title: 'WP ToDo List Plugin',
            description: `A small WordPress plugin. It's my first WP plugin which I created. I hope to have time and ideas for updating and upgrade this project succesfully. If not reqruitment task I've probably never would to start to create my own plugin, it was really fun to create it and to learn some new stuff too! 😃`,
            link: 'https://github.com/marcelmos/wp-todo-list-plugin'
        },
        {
            image: '/img/oxygen-cms-preview.png',
            title: 'Oxygen CMS',
            description: `One of my biggest/smallest projects, a own Content Management System. I base my self on WordPress CMS, becouse its well known by the community and its easy, but WP don't had some of functions which I need, then I decided to create my own CMS. More flexible, easier and maybe lighter. Plus this project is really good for learning new things on backend side.`,
            link: 'https://github.com/marcelmos/oxygen-cms'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Github.com-SunghanKim.png',
            title: 'Incoming projects',
            description: 'More interesting projects in next cards will be added in future. For now you can check out smaller projects on my GitHub account...',
            link: 'https://github.com/marcelmos'
        }
    ];

    // Render Section
    return(
        <section id="projects-section" className="py-20 px-5 md:px-24 xl:px-2/12">
            <h2 className='section-header'><span className="animate-on-scroll vertical-line"></span>Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-8">
                {
                    cardDatas.map((elContent, index) => {
                        return <Card key={ index } cardContent={ elContent } />;
                    })
                }
                {/* <Card cardContent={ secoundCard } />
                <Card cardContent={ thirdCard } /> */}
            </div>
        </section>
    );
}