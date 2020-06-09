import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        const {username, password} = this.state
        //login logic
        if(username === "A" && password === "B"){
            localStorage.setItem("token", "random")
            this.setState({
                loggedIn : true,
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to='/Admin'/>
        }
        return (
            <div className="container mt-5">
                <h4>Login Page</h4>
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={this.submitForm}>
                            <div class="row">
                                <div class="col">
                                    User Name : <input type="text" class="form-control" placeholder="User name" name="username" value={this.state.username} onChange={this.onChange} />
                                </div>
                                <div class="col">
                                    Password : <input type="password" class="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-danger mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>)
    }
}

export default Login
