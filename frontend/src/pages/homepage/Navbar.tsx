import { useState } from "react";

function Navbar(){
    const [isOpen,setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen);
    };
    return(
        <>
            <nav className= "nav-item">
                <a href="#">Trackt</a>
                
                {/* <ul className='nav-list'> */}
                <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                    <li><a href="#">Features</a></li>
                    <li><a href="#" id='login'>Login</a></li>
                    <li><a href="#" id='signup'>Sign Up</a></li>
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