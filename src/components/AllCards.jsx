import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Cards(){
    const [allCards, setAllCards] = useState([])
    const [searchCard, setSearchCard] = useState("")

    const navigate = useNavigate()
    const handleClick = (card) => {
        navigate(`/cards/${card.id}`)
    }

    useEffect(()=>{
        const getAllCards = async() => {
            try{
                const res = await fetch("https://tarotapi.dev/api/v1/cards")
                const data = await res.json();
                setAllCards(data.cards);
            } catch (err) {
                console.error(err);
            }
        }
        getAllCards();
    }, []);

    const filteredCards = allCards.filter((card)=>
        card.name.toLowerCase().includes(searchCard.toLowerCase())
    );

    return(
        <>
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search cards..."
                value={searchCard}
                onChange={(e) => setSearchCard(e.target.value)}
                className="cardSearch"
            />
        </div>

        <div className="title">
            <h1>All Cards</h1>
        </div>

        <div>
            {
                filteredCards && (
                    filteredCards.map((card)=>(
                        <div key={card.name} className="cardContainer">
                            <img

                            />
                            <div className="cardAbout">
                                <h2>{card.name}</h2>
                                {/* <h2>Type: {card.type}</h2> */}
                                {/* <h2>{card.desc}</h2> */}
                                <button onClick={()=>handleClick(card)} className="cardDetailButton">Details</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
        </>
    )
}

export default Cards