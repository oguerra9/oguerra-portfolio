import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(props) {
    const pageOptions = ['Projects', 'Resume'];

    const handleNavClick = (event) => {
        event.preventDefault();
        let pageSelected = event.target.name;
        props.handlePageChange(pageSelected);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={() => props.handlePageChange('Welcome')}>Olivia Guerra</Navbar.Brand>
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