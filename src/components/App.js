import React, { Component, PropTypes } from 'react';
import Header from './common/Header';

class App extends Component {

    constructor() {
        super();
        console.log(process.env.NODE_ENV !== 'production');
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
