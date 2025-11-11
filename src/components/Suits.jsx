import { Link, Outlet} from "react-router-dom";

function Suits(){

    return(
        <div className='suitsPage'>
            <h1>The Four Suits</h1>
            <nav>
                <Link to="/suits/wands">Wands</Link>
                <Link to="/suits/cups">Cups</Link>
                <Link to="/suits/swords">Swords</Link>
                <Link to="/suits/pentacles">Pentacles</Link>
                {/* wands, cups, swords, pentacles */}
            </nav>

            <Outlet />
        </div>
    );
}

export default Suits