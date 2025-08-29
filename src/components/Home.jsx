import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/cards")
    }

    return(
    <>
    <h1>Take a leap of faith...</h1>
    <button onClick={handleClick}>
        Dive in
    </button>
    </>
    )
}

export default Home