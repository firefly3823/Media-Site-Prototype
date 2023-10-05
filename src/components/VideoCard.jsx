import React,{useState} from 'react'
import { Card, Modal,Button } from 'react-bootstrap'
function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card >
                <Card.Img onClick={handleShow} variant="top" src="https://imgs.search.brave.com/qp4z4vLM3K4SegcvaLKn6xt05Yk1YxeatdnI37nk7Og/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9yZWFjdC1sb2dv/LnBuZw" />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-evenly align-items-center'>
                    <h6>Video Caption</h6>
                    <button className='btn'><i className="fa-solid fa-trash text-warning"></i></button>
                    </Card.Title>   
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Caption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width={'100%'} height={"400px"} src="https://www.youtube.com/embed/bJ-3kld5lZk?autoplay=1" title="【GMV】Alan Walker Style - Coming Home (Animation Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard