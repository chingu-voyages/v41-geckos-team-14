import React from "react";
import '../App.css';
import Input from "../component/input";
import Button from "../component/button";

export default class Login extends React.Component {

    state = {
        loading: true
    };

    async componentDidMount() {
        const url = "https://todoapi.fly.dev/api/login";
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        console.log(data);
    }

    render() {
        return(
            <div className="main login-page">
                <h1 className="login-heading">Log In Here</h1>
                <p className="login-description">Enter your user name and password to log in.</p>
                <div className="login-group">
                    <Input label="User Name:" type="text"></Input>
                    <Input label="Password:" type="text"></Input>
                    <Button className="button login-button" label="Log In"></Button>
                    <div>
                        {this.state.loading ? <div>Loading ...</div> : <div>Data is here!</div>}
                    </div>
                </div>
            </div>
        )
    }
}