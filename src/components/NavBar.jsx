import { Link } from "react-router-dom";

function NavBar() {
// Class names will have to be named something that can be reusable!!!

    return(
        <nav>
            <ul className="nav-links">
                <li><Link to="/cards" className="">Home</Link></li>
                <li><Link to="/suits" className="">Suits</Link></li>
                <li><Link to="/courts" className="">Courts</Link></li>
                <li><Link to="/random" className="">Random Card</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;