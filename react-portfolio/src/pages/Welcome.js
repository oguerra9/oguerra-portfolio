import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <Container>
            <div>this will be my welcome page</div>
            <Link to='/projects'><Button>Past Projects</Button></Link>
        </Container>
    );
}