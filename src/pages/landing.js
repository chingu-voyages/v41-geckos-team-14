import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Button from "../component/button";

function Landing() {

    return(
        <div className="main">
            <h1 className="landing-heading">Task Management & To-Do List</h1>
            <p className="landing-description">This productivity tool is designed to manage all of your taks and projects in one place!</p>
            <div className="landing-buttons">
                <Link to="/login" ClassName=""><Button label="Log In"></Button></Link>
                <Link to="/signup" ClassName=""><Button label="Sign Up"></Button></Link>
                
            </div>
        </div>
    )

}

export default Landing;