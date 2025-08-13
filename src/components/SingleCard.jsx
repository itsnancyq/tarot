import { useEffect, useState } from "react"


function SingleCard(){
    const [oneCard, setOneCard] = useState([])

    useEffect(()=>{
        const getOneCard = async() => {
            try{

            } catch(err) {
                console.error(err);
            }
        }
    }, [])

    return(
        <>
        </>
    )
}

export default SingleCard