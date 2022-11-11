import React, { useState, useEffect } from "react";
import '../App.css';
import Button from "../component/button";

function Login() {

    // Define variables in state
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [postId, setPostId] = useState(null);

    // Make API Post call with React hook useEffect (code modified from https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    //Add functions to handle the data from the input fields

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
                        <p>Returned Id: {postId}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;