import React, { Component } from 'react';
import { Link } from 'react-router';

// TODO: import real jumbotron and use it
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap
// https://react-bootstrap.github.io/components.html#jumbotron

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
