import React from "react";
import '../App.css';
import Input from "../component/input";
import Button from "../component/button";

function Signup() {

    return(
        <div className="main signup-page">
            <h1 className="signup-heading">Log In Here</h1>
            <p className="signup-description">Enter a username, your email and a password to sing up</p>
            <div className="signup-group">
                <Input label="Username:" type="text"></Input>
                <Input label="Email:" type="email"></Input>
                <Input label="Password:" type="password"></Input>
                <Input label="Re-enter Password:" type="password"></Input>
                <Button className="button signup-button" label="Sign Up"></Button>
            </div>
        </div>
    )

}

export default Signup;