import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Course Administration</h1>
                <div>
                    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
