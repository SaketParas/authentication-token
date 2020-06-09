import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
             loggedIn
        }
    }
    
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to = '/'/>
        }
        return (
            <div>
                <h3>This is admin page only authorize people can access it</h3>
                <Link to="/Logout">Logout</Link>
            </div>
        )
    }
}

export default Admin
