import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            name: '',
            email: '',
            phone: '',
            password: '',
            confirm_pass: '',
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    form_submit = (e) => {
        if (this.state.password !== this.state.confirm_pass) {
            alert("Password and confirm password dosen't matches")
        }
        e.preventDefault();
        console.log(this.state);
        let xSelected = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.option_data(xSelected)
        this.props.history.push('/Login')
    }
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <h3 class="text-danger">Sign In here</h3>
                        <form onSubmit={this.form_submit}>
                            <div class="row">
                                <div class="col">
                                    User_name<input type="text" class="form-control" placeholder="username" name="username" value={this.state.username} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    name<input type="text" class="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.input_change} />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Email<input type="email" class="form-control" placeholder="Your Email" name="email" value={this.state.email} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Phone<input type="number" class="form-control" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.input_change} />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Password<input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Confirm Password<input type="password" class="form-control" placeholder="Confirm Password" name="confirm_pass" value={this.state.confirm_pass} onChange={this.input_change} />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-danger mt-3">Sign In</button>
                        </form>
                        Already a member ? <Link to="/Login">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
