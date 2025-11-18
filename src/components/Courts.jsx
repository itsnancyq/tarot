import { Link, Outlet } from "react-router-dom";

function Courts(){
    const courts = [
        { name: "Page", img: "./public/cards/back.jpeg"},
        { name: "Knight", img: "./public/cards/back.jpeg"},
        { name: "Queen", img: "./public/cards/back.jpeg"},
        { name: "King", img: "./public/cards/back.jpeg"}
    ];

    return(
        <div>
            <h1>The Four Courts</h1>

            <div className="cardsGrid">
                {courts.map((court) => (
                    <Link to={`/courts/${court.name.toLowerCase()}`}
                    key={court.name} className="cardContainer">
                        <img className="image" src={court.img} alt={court.name}
                        />
                        <h2 className="title">{court.name}</h2>
                    </Link>
                ))}

            </div>

            <Outlet />
        </div>
    );
}

export default Courts;