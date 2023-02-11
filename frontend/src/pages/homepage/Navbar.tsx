import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() : JSX.Element{
    const [isOpen,setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen);
    };
    return(
        <>
            <nav className= "nav-item">
                <li className="tracktText"><Link to={"/"}>Trackt</Link></li>
                
                {/* <ul className='nav-list'> */}
                <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                    <li><Link to={"/features" } id="features">Features</Link></li>
                    <li><Link to={"/login"} id="login">Login</Link></li>
                    <li><Link to={"/signUp"} id="signup">SignUp</Link></li>
                </ul>

                {/* <div className="hamburger" onClick={handleToggle}> */}
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
           </nav>
        </>
    );
}

export default Navbar;