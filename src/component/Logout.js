import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h3>You are being logout</h3>
                <Link to="/Login">Login again</Link>
            </div>
        )
    }
}

export default Logout
