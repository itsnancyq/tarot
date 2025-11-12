import { useNavigate } from "react-router-dom"

// Start page, launchpad. Home will be /cards
function Home(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/cards")
    }

    return(
    <div className="home-container fade-in">
        <div className="content">
            <h1>Take a leap of faith...</h1>
            <button onClick={handleClick}>
                Dive in
            </button>
        </div>
    </div>
    )
}

export default Home