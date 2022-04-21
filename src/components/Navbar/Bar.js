import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Bar.css';

class Bar extends Component {
    render() {
        return (
            <>
                <Navbar className={"Navbar"} expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand to={"/"}>
                            <Link to={"/"} className={"linkBrand"}>WeekPaul</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to={"/"} className={"link"}>Créer un evenement</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Bar;