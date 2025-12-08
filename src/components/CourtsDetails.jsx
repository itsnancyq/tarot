import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function CourtDetails(){
    const { courtName } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const getCourtCards = async () => {
            try{
                const res = await fetch(`https://tarotapi.dev/api/v1/cards/courts/${courtName}`);
                const data = await res.json();
                setCards(data.cards || []);
            } catch(err) {
                console.error("Error fetching cards:", err);
            } finally {
                setLoading(false);
            }
        };
        getCourtCards();
    }, [courtName]);

    if (loading) return <p>Loading {courtName} cards...</p>;

    const courtTitles = {
        king : "King",
        queen : "Queen",
        knight : "Knight",
        page : "Page",
    };

    const courtMeanings = {
        king: "Authority, mastery, control, leadership",
        queen: "Nurturing, emotional intelligence, wisdom",
        knight: "Action, movement, pursuit, adventure",
        page: "Youth, curiosity, beginnings, messages",
    };

    const handleClick = (card) => {
        navigate(`/cards/${encodeURIComponent(card.name_short)}`, { state: {card} });
    }


    return(
        <div>
            <Link to="/courts" className="backbtn">
            ← Back to Courts
            </Link>

            <h1>{courtTitles[courtName]}</h1>
            {<p>{courtMeanings[courtName]}</p>}

            <div className="cardsGrid">
                {cards.map((card) => (
                    <div key={card.name_short} className="cardContainer">
                        <h3>{card.name}</h3>
                        <img className="imageAll" src={`/cards/${card.name_short}.jpeg`}
                            alt={card.name}
                            onError={(e) => (e.target.style.display = "none")}
                            loading="lazy"
                        />
                        <button onClick={() => handleClick(card)}
                            className="cardDetailButton">
                            Details
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CourtDetails;