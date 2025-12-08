import { useNavigate } from "react-router-dom";

function BackButton(){
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1);
        // ^This performs the same action as the brower's physical back button, returning them to the page before the current page :0)
        };

    return(
        <button className="backbtn" onClick={handleBack}>← Back</button>
    )
}

export default BackButton;