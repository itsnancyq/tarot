import { useLocation } from "react-router-dom"

function Footer() {
    const location = useLocation();
    const hideLayout = location.pathname === "/";

    if (hideLayout) return null;

    return(
        <>
            <p className="footer">©2025 Nancy Quinonez. Created with heart and soul.</p>
        </>
    )
}

export default Footer