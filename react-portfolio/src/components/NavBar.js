import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function NavBar(props) {
    const pageOptions = ['welcome','projects', 'resume'];

    const handleNavClick = (event) => {
        event.preventDefault();
        let pageSelected = event.target.name;
        // props.handlePageChange(pageSelected);
        window.location.pathname = `/${pageSelected}`;
    }

    return (
            <Navbar expand="lg" className="bg-body-tertiary p-0">
                <Container className="m-0">
                    <Navbar.Brand name="welcome">Olivia Guerra</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {pageOptions.map(page => (
                                <Nav.Link key={page} name={page} onClick={handleNavClick}>{page}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}