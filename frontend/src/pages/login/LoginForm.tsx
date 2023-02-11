import React, { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm() : JSX.Element{

    const [username,setUsername] = useState("");
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

        if(emailRegex.test(username) === false){
            setError("Incorrect format for email");
            return;
        }

        //Add code below to send the details to the backend somehow

    }

    return (
        <div className="login-form-outer-container">
            <form onSubmit={handleSubmit} className="login-form-container">
            <h1>Login To Your Account</h1>
        
            <input type="text" className="login-username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email"/>
            <input type="password" className="login-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        
            {error && <p className="login-error">{error}</p>}
            
            <button type="submit">Login</button>

            <div>
                New Here? 
                <Link to={"/signup"}> Sign Up Now!</Link>
            </div>
            </form>
        </div>
    )
};

export default LoginForm;