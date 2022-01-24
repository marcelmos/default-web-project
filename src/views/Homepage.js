import FormSection from '../components/sections/FormSection';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import AboutMe from '../components/sections/AboutMe';
// import FAQ from '../components/sections/FAQ';

export default function Homepage(){
    return(
        <main className='-mt-[90px]'>
            <Hero />

            <Projects />

            {/* <FAQ /> */}

            <AboutMe />

            <FormSection />
        </main>
    );
}