import React, { useState } from "react";
import { Link } from "react-router-dom";


function SignUpForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if(passwordRegex.test(password) === false){
            setError("Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number or special character.");
            return;
        }

        if(emailRegex.test(email) === false){
            setError("Email format incorrect.");
            return;
        }
        //Add code below to send the details to the backend somehow

    }

    return (
        <div className="signup-form-outer-container">
            <form onSubmit={handleSubmit} className="signup-form-container">
            <h1>Sign Up for a new account</h1>
            
            <input type="email" className="signup-name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" className="signup-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        
        
            {error && <p className="signup-error">{error}</p>}
            
            <button type="submit">Sign Up</button>

            <div>
                Already have account? 
                <Link to={"/login"}> Login Instead!</Link>
            </div>
            </form>
        </div>
    )
}

export default SignUpForm;