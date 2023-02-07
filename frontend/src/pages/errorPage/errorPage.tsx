import { Link } from "react-router-dom";
import Footer from "../homepage/Footer";
import Navbar from "../homepage/Navbar";
import "./ErrorPage.css";

//This is the 404 page
function ErrorPage() :JSX.Element{
    return (
        <>
            <Navbar/>
            <div className="error-page-container">
                <p className="error-page-404">404</p>
                <p className="error-page-text">SORRY,THERE IS NOTHING HERE</p>
                <li className="error-page-button"><Link to={"/"}>Go Home</Link></li>
            </div>
            <Footer/>
        </>
    )
};

export default ErrorPage; 