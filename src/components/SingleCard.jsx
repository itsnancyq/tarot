import { useEffect, useState } from "react"


function SingleCard(){
    const [oneCard, setOneCard] = useState([])

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
    }, [])

    return(
        <>
        </>
    )
}

export default SingleCard