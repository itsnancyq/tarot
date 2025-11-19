import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";
import tarotLogo from '/tarotLogo.png';

function Header() {
    const location = useLocation();
    const hideLayout = location.pathname === "/";

    if (hideLayout) return null;

    return(
        <header className="header-container">
            <div className="logo-wrapper">
                <img id="logo" src={tarotLogo} alt="Tarot Logo" />
                <h1>Tarot Treasury</h1>
            </div>

            <NavBar />

        </header>
    )
}

export default Header