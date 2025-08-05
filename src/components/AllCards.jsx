import { useEffect, useState } from "react"

function Cards(){
    const [allCards, setAllCards] = useState([])
    const [searchCard, setSearchCard] = useState("")

    useEffect(()=>{
        const getAllCards = async() => {
            try{
                const res = await fetch("https://tarotapi.dev/cards")
                const data = await res.json();
                setAllCards(data);
            } catch (err) {
                console.error(err);
            }
        }
        getAllCards();
    }, []);

    const filteredCards = allCards.filter((card)=>
        card.title.toLowerCase().includes(searchCard.toLowerCase())
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
                        <div key={card.id} className="cardContainer">
                            <img

                            />
                            <div className="cardAbout">
                                <h2>{card.name}</h2>
                                <h2>{card.type}</h2>
                                <h2>{card.desc}</h2>
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