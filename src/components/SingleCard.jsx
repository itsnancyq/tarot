import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function SingleCard(){
    const [oneCard, setOneCard] = useState([]);

    const { id } = useParams();

    useEffect(()=>{
        const getOneCard = async() => {
            try{
                const res = await fetch(`https://tarotapi.dev/api/v1/cards/${id}`);
                const data = await res.json();
                setOneCard(data.cards);
            } catch(err) {
                console.error(err);
            }
        }
        getOneCard();
    }, [id]);

    return(
        <>
        <div>
            <Link to="/" className="backLink">Back</Link>
        </div>
        <div className="singleCardContainer">

            {/* <img
            /> */}

            <div>
                <h1>{card.name}</h1>
                <h2>Type: {type.card}</h2>
                <h3>About: {card.desc}</h3>
            </div>
        </div>
        </>
    )
}

export default SingleCard