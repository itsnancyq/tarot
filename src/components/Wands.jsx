import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wands(){
    const [wands, setWands] = useState([]);

    useEffect(()=>{
        const getWands = async() =>{
            try{
                const res = await fetch("https://tarotapi.dev/api/v1/cards/suits/wands");
                const data = await res.json();
                setWands(data);
            } catch (err) {
                console.error(err);
            }
        };
        getWands();
    }, []);

    return(
        <>

        <Link to="/suits">Back to Suits</Link>

        <h1>Suit of Wands</h1>
        <p>The Wands are associated with fire - creativity, drive, and action.</p>

        {/* <div>
            {filteredCards.length === 0 ? (
                <p>No matches.</p>
            )  : (
                filteredCards.map((wands) => (
                    <div key={wands.name_short}>
                        <div>
                            <h2>{wands.name}</h2>
                            <img src={`/cards/$card.name_short}.jpeg`} alt={`$`}/>
                        </div>
                    </div>

                ))
            )
        }

        </div> */}

        </>
    )
}

export default Wands