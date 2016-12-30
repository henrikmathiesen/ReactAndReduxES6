import React, { Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Course Administration</h1>
                <div>
                    <Link to="about">
                        <Button bsStyle="primary" bsSize="large">Learn more</Button>
                    </Link>
                </div>
            </Jumbotron>
        );
    }
}

export default HomePage;
