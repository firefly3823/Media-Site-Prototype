import React,{useState} from "react";
import { Modal,Button, Form } from "react-bootstrap";
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <div className="d-flex align-items-center">
            <h4>Upload New Video</h4>
                <button onClick={handleShow} className="btn"><i class="fa-solid fa-circle-plus fa-2xl"></i></button>
        </div>
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
                            <Form.Control type="email" placeholder="Enter Video ID" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Video Caption" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Video URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Youtube Video Link" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-success btn">Upload</Button>
                </Modal.Footer>  
            </Modal>
        </>
    );
}

export default Add;
