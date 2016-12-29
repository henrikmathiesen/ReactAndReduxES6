import React from 'react';
import { Link, IndexLink } from 'react-router';

// TODO: import real jumbotron and use it
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap
// https://react-bootstrap.github.io/components.html#jumbotron

const Header = () => (
    <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        { " | " }
        <Link to="/about" activeClassName="active">About</Link>
    </nav>
);

export default Header;
