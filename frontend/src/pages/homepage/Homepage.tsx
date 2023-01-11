import Navbar from "./Navbar";
import './Homepage.css';
import Body from "./Body";
import Footer from "./Footer";

const hamburger: HTMLElement = document!.querySelector(".hamburger") as HTMLElement;
const navList: HTMLElement = document.querySelector(".nav-list") as HTMLElement;

function mobileMenu(){
    hamburger!.classList.toggle("active");
    navList!.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}

if(hamburger !== null){
    hamburger.addEventListener('click',mobileMenu);
    console.log(hamburger);
    const navLink = document!.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));
}


function Homepage(){
    return (
        <div className="grid-container">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Homepage;