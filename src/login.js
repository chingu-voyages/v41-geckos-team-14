import React from "react";
import './App.css';
import Input from "./input";
import Button from "./button";

function Login() {

    return(
        <div className="main login-page">
            <h1 className="login-heading">Log In Here</h1>
            <p className="login-description">Enter your user name and password to log in.</p>
            <div className="login-group">
                <Input label="User Name:" type="text"></Input>
                <Input label="Password:" type="text"></Input>
                <Button className="button login-button" label="Log In"></Button>
            </div>
        </div>
    )

}

export default Login;