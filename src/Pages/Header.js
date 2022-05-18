import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ToDo Boss</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/todo'>Todo </Nav.Link>
                            {
                                user ? <Button onClick={handleLogout} className='text-dark' style={{ backgroundColor: '#72adf1', borderRadius: '10px', border: 'none', color: '#000' }}>Logout</Button> : <Button as={Link} to='/login' variant="outline-success" className='text-dark'>Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;