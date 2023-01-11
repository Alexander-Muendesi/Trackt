
function Navbar(){
    return(
        <>
            <nav className= "nav-item">
                <a href="#">Trackt</a>
                
                <ul className='nav-list'>
                    <li><a href="#">Features</a></li>
                    <li><a href="#" className='login'>Login</a></li>
                    <li><a href="#" className='signup'>Sign Up</a></li>
                </ul>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
           </nav>
        </>
    );
}

export default Navbar;