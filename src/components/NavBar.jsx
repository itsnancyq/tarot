import { Link } from "react-router-dom";

function NavBar() {
// Class names will have to be named something that can be reusable!!!

    return(
        <nav className="">
            <Link to="/cards" className="">Home</Link>
            <Link to="/suits" className="">Suits</Link>
            <Link to="/courts" className="">Courts</Link>
            <Link to="/random" className="">Random Card</Link>
        </nav>
    );
}

export default NavBar;