import React from "react";
import { useState } from "react";
import '../App.css';
import Input from "../component/input";
import Button from "../component/button";
import { render } from "@testing-library/react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return(
            <div className="main login-page">
                <h1 className="login-heading">Log In Here</h1>
                <p className="login-description">Enter your user name and password to log in.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-group">
                        <Input label="User Name:" type="text" value={this.state.value} onChange={this.handleChange}></Input>
                        {/*<Input label="Password:" type="text" value={password} defaultValue={""} onChange={console.log(this)}></Input>*/}
                        <Button className="button login-button" label="Log In" type="submit"></Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;