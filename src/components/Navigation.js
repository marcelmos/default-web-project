// import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="sticky top-0 max-h-[90px] px-11 py-4 bg-coal-600 text-xl bg-opacity-75 z-50 flex items-center justify-between">
            <a href="/"><img src="/img/logo.svg" alt="default-web-logo" className="max-h-15" /></a>
            <ul className="flex justify-center font-light">
                <li className="px-4 mx-2 active"><a href="/">Start</a></li>
                <li className="px-4 mx-2"><a href="/#projects-section">Projects</a></li>
                <li className="px-4 mx-2"><a href="/#faq-section">FAQ</a></li>
                <li className="px-4 mx-2"><a href="/#about-me-section">About Me</a></li>
                <li className="px-4 mx-2"><a href="/#contact-section">Contact</a></li>
            </ul>
            <a href="https://github.com/marcelmos" className="bg-yellow-400 hover:bg-yellow-500 text-coal-500 px-6 py-4 max-h-15 rounded-full font-bold flex items-center"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="w-10 rounded-full mr-5"/> Check my GitHub</a>
        </nav>
    );
}