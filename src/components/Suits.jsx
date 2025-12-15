import { Link, Outlet } from "react-router-dom";

function Suits(){
    const suits = [
        { name: "Wands", img: "./cards/back.jpeg"},
        { name: "Cups", img: "./cards/back.jpeg"},
        { name: "Swords", img: "./cards/back.jpeg"},
        { name: "Pentacles", img: "./cards/back.jpeg"}
    ];

    return(
        <div>
            <h1>The Four Suits</h1>

            <div className="cardsGrid">
                {suits.map((suit) => (
                    <Link to={`/suits/${suit.name.toLowerCase()}`} key={suit.name} className="cardContainer">
                        <img className="image" src={suit.img} alt={suit.name}/>
                        <h2 className="title">{suit.name}</h2>
                    </Link>
                ))}
            </div>

            <Outlet />
        </div>
    );
}

export default Suits;