import React,{useState} from 'react'
import { Card, Modal,Button } from 'react-bootstrap'
function VideoCard({displaydata}) {
    console.log(displaydata)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {
                displaydata &&
                <Card className='mb-3'>
                        <Card.Img onClick={handleShow} style={{height:"150px"}} variant="top" src={displaydata?.url} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-evenly align-items-center'>
                    <h6>{displaydata?.caption}</h6>
                    <button className='btn'><i className="fa-solid fa-trash text-warning"></i></button>
                    </Card.Title>   
                </Card.Body>
            </Card>

            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displaydata?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width={'100%'} height={"400px"} src={`${displaydata.embededlink}/autoplay=1`} title="【GMV】Alan Walker Style - Coming Home (Animation Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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