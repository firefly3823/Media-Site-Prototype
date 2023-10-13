import React, { useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { deleteAVideo, addHistory } from '../services/allApi';
function VideoCard({ displaydata, setDeleteStatVideo, insideCategory }) {
    // console.log(displaydata)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        // get caption and link
        const { caption, embededlink } = displaydata
        //generate time stamp
        let today = new Date()
        const timestamp = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)

        // console.log(caption, embededlink, timestamp)

        let reqBody = {
            caption, embededlink, timestamp
        }
        // api call 
        await addHistory(reqBody)
        

    }
    //deleting function
    const removeVideo = async (id) => {
        //make api call
        await deleteAVideo(id)  //API CALL
        setDeleteStatVideo(true) // State Lift -  changing parent state to true
    }

    const dragStarted = (e,id)=>{
        console.log("Drag  Started");
        e.dataTransfer.setData("cardId",id)
        
    }
    return (
        <>
            {
                displaydata &&
                <Card className='mb-3 shadow' draggable onDragStart={(e)=>dragStarted(e,displaydata?.id)}>
                    <Card.Img onClick={handleShow} className='image-fluid' style={{ height: "150px" }} variant="top" src={displaydata?.url} />
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-evenly align-items-center'>
                            <h6>{displaydata?.caption}</h6>
                            {
                                    !insideCategory&&
                                <button onClick={() => removeVideo(displaydata?.id)} className='btn'><i className="fa-solid fa-trash text-warning"></i></button>
                                }
                        </Card.Title>
                    </Card.Body>
                </Card>

            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displaydata?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width={'100%'} height={"400px"} src={`${displaydata.embededlink}?autoplay=1`} title="【GMV】Alan Walker Style - Coming Home (Animation Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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