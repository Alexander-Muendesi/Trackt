import "./SignUpPage.css";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import SignUpForm from "./SignUpForm";

function SignUpPage() : JSX.Element{
    return (
        <>
            <Navbar/>
            <SignUpForm/>
            <Footer/>
        </>
    )
}

export default SignUpPage;