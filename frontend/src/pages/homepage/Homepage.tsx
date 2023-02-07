import Navbar from "./Navbar";
import './Homepage.css';
import Body from "./Body";
import Footer from "./Footer";


function Homepage() : JSX.Element{
    return (
        <div className="grid-container">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Homepage;