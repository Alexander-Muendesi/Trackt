import React, { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm() : JSX.Element{

    const [username,setUsername] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const usernameRegex = /^(?![0-9]+$)(?!\s+$)[a-zA-Z0-9\s]+$/;//will be used for name and surname as well
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if(passwordRegex.test(password) === false){
            setError("Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number or special character.");
            return;
        }

        if(usernameRegex.test(username) === false){
            setError("Username cannot consist of numbers only or whitespaces.");
            return;
        }

        if(usernameRegex.test(name) === false){
            setError("Name cannot consist of numbers only or whitespaces.");
            return;
        }

        if(usernameRegex.test(surname) === false){
            setError("Surname cannot consist of numbers only or whitespaces.")
        }

        //Add code below to send the details to the backend somehow

    }

    return (
        <div className="login-form-outer-container">
            <form onSubmit={handleSubmit} className="login-form-container">
            <h1>Login To Your Account</h1>
            
            <input type="text" className="login-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        
        
            <input type="text" className="login-surname" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname"/>
        
        
            <input type="text" className="login-username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
        
        
            <input type="text" className="login-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        
        
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