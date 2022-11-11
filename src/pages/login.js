import React from "react";
import { useState } from "react";
import '../App.css';
import Button from "../component/button";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
            event.preventDefault();
            console.log("I am submitting: " + userName);
            console.log("I am submitting: " + password);
        }
    
    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <div className="main login-page">
            <h1 className="login-heading">Log In Here</h1>
            <p className="login-description">Enter your user name and password to log in.</p>
            <form onSubmit={onSubmit}>
                <div className="login-group">
                    <label>
                        User Name: <input className="input" name="username" type="text" value={userName} onChange={handleUsernameChange}/>
                    </label>
                    <label>
                        Password: <input className="input" name="password" type="text" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <Button className="button login-button" label="Log In" type="submit" ></Button>
                    <div>
                        <p>You say: {userName}, {password}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;