import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar className="bg-primary">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
                        <i class="fa-solid fa-cloud-arrow-up fa-beat-fade" style={{ paddingRight: "10px" }}></i>
                        Media Player
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header