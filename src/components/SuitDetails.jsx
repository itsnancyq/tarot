import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function SuitDetails() {
    const { suitName } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] =useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const getSuitCards = async () => {
            try {
                const res = await fetch(`https://tarotapi.dev/api/v1/cards/suits/${suitName}`);
                const data = await res.json();
                setCards(data.cards || []);
            } catch (err) {
                console.error("Error fetching cards:", err);
            } finally {
                setLoading(false);
            }
        };
        getSuitCards();
    }, [suitName]);

    if (loading) return <p>Loading {suitName} cards...</p>;

    const suitTitles = {
        wands : "Suit of Wands 🪄",
        cups: "Suit of Cups ☕",
        swords: "Suit of Swords ⚔️",
        pentacles : "Suit of Pentacles ⭐",
    };

    const suitMeanings = {
        wands: "The Wands represent fire — creativity, passion, and inspiration.",
        cups: "The Cups represent water — emotions, intuition, and relationships.",
        swords: "The Swords represent air — intellect, truth, and conflict.",
        pentacles: "The Pentacles represent earth — work, money, and stability.",
    };

    const handleClick = (card) => {
        navigate(`/cards/${encodeURIComponent(card.name_short)}`, { state: {card} });
    }

    return(
        <div>
            <Link to="/suits" className="backbtn">
            ← Back to Suits
            </Link>

            <h1>{suitTitles[suitName]}</h1>
            {<p>{suitMeanings[suitName]}</p>}

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

export default SuitDetails;