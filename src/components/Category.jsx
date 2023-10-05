import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


function Category() { 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='d-grid'><button onClick={handleShow} className='btn btn-success rounded'> Add New Category</button></div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload a Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the Following details</p>
                    <Form className="border border-secondary p-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Category ID" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Category Name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-success btn">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category