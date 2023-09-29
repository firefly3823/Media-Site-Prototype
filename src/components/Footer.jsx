import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
    return (
        <div style={{ height: "300px" }} className='bg-primary w-100 text-light d-flex flex-column justify-content-center align-items-center'>
            <div className="footer-content h-100 align-items-center w-100 d-flex flex-row justify-content-evenly">
                <div className="about" style={{ width: "350px" }}>
                    <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
                        <i class="fa-solid fa-cloud-arrow-up fa-beat-fade" style={{ paddingRight: "10px" }}></i>
                        Media Player
                    </Link>
                    <p> Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                </div>
                <div className="Links d-flex flex-column">
                    <h3 className='text-white'>Links</h3>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Home</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Landing Page</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Watch history</Link>
                </div>
                <div className="Guides d-flex flex-column">
                    <h3 className='text-white'>GUIDES</h3>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>REACT</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>React Bootstrap</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Routing</Link>
                </div>
                <div className="Contact">
                    <h3 className='text-white'>CONTACT US</h3>
                    <InputGroup size="sm" className="mb-3 w-100">
                        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <button type="button" class="btn btn-success">SUBSCRIBE</button>
                    </InputGroup>
                    <div className='d-flex w-100 justify-content-evenly'>
                        <div><Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-twitter fa-xl"></i></Link></div>
                        <div><Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-whatsapp fa-xl"></i></Link></div>
                        <div><Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-facebook fa-xl"></i></Link></div>
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
        </div>
    )
}

export default Footer