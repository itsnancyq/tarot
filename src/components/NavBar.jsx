import { Link } from "react-router-dom"

function NavBar() {


    return(
        <nav>
            <Link to="/" className="">Home</Link>
            <Link to="/suits" className="">Suits</Link>
        </nav>
    )
}

export default NavBar