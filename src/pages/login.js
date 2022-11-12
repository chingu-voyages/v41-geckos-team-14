import React, { useState } from "react";
import '../App.css';
import Button from "../component/button";
import { Link } from "react-router-dom";

function Login() {

    // Define variables in state
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [dashboardLink, setDashboardLink] = useState("");
    const [todoLink, setTodoLink] = useState("");

    //Add functions to handle the data from the input fields
    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const loginData = {username, password}

        try {
            let res = await fetch("https://todoapi.fly.dev/api/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(loginData),
            });
            if (res.status === 200) {
                setMessage("User logged in successfully.");
                setDashboardLink(<Link to="/dashboard" className=""><Button label="Dashboard"></Button></Link>);
                setTodoLink(<Link to="/TodoApp" className=""><Button label="To-Do-List"></Button></Link>);
            } else if (res.status === 422) {
                setMessage("Invalid credentials. Try again!");
                setDashboardLink("");
                setTodoLink("");
            } else {
                setMessage("Some error occured.");
                setDashboardLink("");
                setTodoLink("");
            }
          } catch (error) {
                console.log(error);
          }
    }

    return(
        <div className="main login-page">
            <h1 className="login-heading">Log In Here</h1>
            <p className="login-description">Enter your user name and password to log in.</p>
            <form onSubmit={onSubmit}>
                <div className="login-group">
                    <label>
                        User Name: <input className="input" name="username" type="text" value={username} onChange={handleUsernameChange}/>
                    </label>
                    <label>
                        Password: <input className="input" name="password" type="text" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <Button className="button login-button" label="Log In" type="submit" ></Button>
                    <div>
                        <p>Login status: {message}</p>
                        {dashboardLink}
                        {todoLink}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;