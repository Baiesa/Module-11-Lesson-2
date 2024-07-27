// Filename: UserProfile.jsx

import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        // Bind the method to ensure 'this' refers to the class instance
        this.changeName = this.changeName.bind(this);
    }

    // Corrected function
    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;