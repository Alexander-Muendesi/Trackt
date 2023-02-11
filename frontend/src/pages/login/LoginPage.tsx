import "./LoginPage.css";
import Footer from "../homepage/Footer";
import Navbar from "../homepage/Navbar";
import LoginForm from "./LoginForm";

function LoginPage() : JSX.Element{
    return (
        <>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </>
    )
}

export default LoginPage;