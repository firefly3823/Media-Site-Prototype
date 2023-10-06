import React,{useState} from "react";
import { Modal,Button, Form } from "react-bootstrap";
import { uploadVideo } from '../services/allApi'
function Add() {
    const [video,setVideo] = useState({
        id:"",
        caption:"",
        url:"",
        embededlink:""
    })
    // console.log(video);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const extractUrl = (e)=>{
        const {value} = e.target
        if (value) {
            const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
            setVideo({...video,embededlink:embedData})
        } else{
            setVideo({...video,embededlink:""})
        }
        // console.log(value)
    }
    const handleUpload = async ()=>{
        const { id, caption, url, embededlink } = video
        if (!id || !caption || !url || !embededlink) {
            alert("Please fill the form completely")
        }else{
            // make api call
            const response = await uploadVideo(video)
            // console.log(response)
            if (response.status>=200 && response.status<300 ) {
                alert(`"${response.data.caption}" Video uploaded`)
                // handleClose()
            }else{
                alert("Please Provide Unique ID")
            }
        }
    }

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
                            <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Video Thump URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Youtube Video Link" onChange={ extractUrl } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-success btn" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>  
            </Modal>
        </>
    );
}

export default Add;

