import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const Header = () => (
    <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="about">
            <NavItem>About</NavItem>
        </LinkContainer>
        <LinkContainer to="courses">
            <NavItem>Courses</NavItem>
        </LinkContainer>
    </Nav>
);

export default Header;
