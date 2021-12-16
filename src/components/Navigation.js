import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="sticky top-0 h-10 bg-gray-900 bg-opacity-75 z-50">
            <ul className="flex justify-center">
                <li className="px-2 py-1 mx-2"><Link to="/">Start</Link></li>
                <li className="px-2 py-1 mx-2"><Link to="/faq">Start</Link></li>
            </ul>
        </nav>
    );
}