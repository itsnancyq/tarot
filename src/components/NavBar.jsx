import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/cards" className="">Home</Link></li>
                <li><Link to="/suits" className="">Suits</Link></li>
                <li><Link to="/courts" className="">Courts</Link></li>
                <li><Link to="/random" className="">Random Card</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;