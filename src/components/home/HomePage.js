import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Course Administration</h1>
                <div>
                    <LinkContainer to="about">
                        <Button bsStyle="primary" bsSize="large">Learn more</Button>
                    </LinkContainer>
                </div>
            </Jumbotron>
        );
    }
}

export default HomePage;
