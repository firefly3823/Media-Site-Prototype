import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { deleteCategory, getAVideo, getAllCategory, saveCategory, updateCategory } from '../services/allApi'
import { toast, ToastContainer } from 'react-toastify';
import VideoCard from './VideoCard';

function Category() {
    const [allCategory, setAllCategory] = useState([])
    const [categoryname, setCategoryName] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCategory = async () => {
        let body = {
            categoryname, allVideos: []
        }
        const response = await saveCategory(body)
        if (response.status >= 200 && response.status < 300) {
            handleClose()
            toast.info("Category added")
            // call handleget Category
            handleGetCategory()

        } else {
            toast.info("Categry not added, try again sometime")
        }
    }
    const handleGetCategory = async () => {
        const { data } = await getAllCategory()
        setAllCategory(data)
    }
    console.log(allCategory);
    useEffect(() => {
        handleGetCategory()
    }, [])
    const handleDelete = async (id) => {
        await deleteCategory(id)
        //get category after 
        handleGetCategory()
    }
    //preventing event when draging over the category
    const overDrag = (e) => {
        console.log("over the category");
        e.preventDefault()
    }
    const videoDropped = async (e, categoryId) => {
        const VideoCardId = e.dataTransfer.getData("CardId") //receiving datafrom droping
        // console.log(VideoCard);
        const { data } = await getAVideo(VideoCardId) //getting a video with id
        const selectedCategory = allCategory.find(item => item.id === categoryId) //check and find id from all categroy
        selectedCategory.allVideos.push(data) //pushed data to array
        await updateCategory(categoryId, selectedCategory)
        handleGetCategory()

    }
    return (
        <>
            <div className='d-grid'><button onClick={handleShow} className='btn btn-success rounded'> Add New Category</button></div>
            {
                allCategory ? allCategory?.map(item => (
                    <div className="border border-2 shadow mt-3 mb-3 p-3 rounded" dropable onDragOver={(e) => overDrag(e)} onDrop={(e) => { videoDropped(e, item?.id) }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>{item.categoryname}</h6>
                            <button className="btn" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash text-danger"></i></button>
                        </div>
                        {
                            item?.allVideos &&
                            <Row>
                                {
                                    item?.allVideos.map(card => (
                                        <Col sm={12}>
                                            <VideoCard displaydata={card} insideCategory={true} />
                                        </Col>
                                    ))
                                }
                            </Row>
                        }
                    </div>
                )) : <div></div>
            }
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
                            <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-success btn" onClick={handleCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-center"
                theme="colored"
                autoClose={3000} />
        </>
    )
}

export default Category