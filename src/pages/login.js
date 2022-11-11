import React, { useState } from "react";
import '../App.css';
import Button from "../component/button";

function Login() {

    // Define variables in state
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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
        console.log("User name is: " + username);
        console.log(typeof username);
        console.log("Password is: " + password);
        console.log(typeof password);

        try {
            let res = await fetch("https://todoapi.fly.dev/api/login", {
                method: "POST",
                body: JSON.stringify(loginData),
            });
            if (res.status === 200) {
                console.log(res.status);
                setMessage("User logged in successfully");
            } else if (res.status === 422) {
                setMessage("Invalid credentials.");
            } else {
                setMessage("Some error occured");
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
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;