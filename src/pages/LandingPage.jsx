import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import landImage from '../images/image.svg'
import video_manage from '../images/video_manage.svg'
import Sorting_media from '../images/sort_vides.svg'
import history from '../images/history.svg'
import { useNavigate } from 'react-router-dom';


function LandingPage() {
    const navigateUrl = useNavigate()
    const toHomePage = () =>{
        navigateUrl('/home')
    }
    return (
        <>
        <Row className='w-100 align-items-center'>
            <Col></Col>
            <Col lg={4}>
                <h1>Welcome to <span className='text-success'>Media Player</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta labore magni temporibus voluptate laudantium ducimus, est deleniti quam ipsa, veniam dolorum provident aut consequuntur quos vitae corrupti optio rem.</p>
                    <button type="button" onClick={toHomePage} class="btn btn-success">Get Started</button>
            </Col>
            <Col></Col>
            <Col md={5}>
                <div style={{width:"500px"}} className='p-3'><img className='img-fluid' src={landImage} alt="" /></div>
            </Col>
        </Row>
        <div className="container-fluid text-center p-4">
            <h1 className='pb-4'>FEATURES</h1>
               <div className='d-flex justify-content-evenly'>
                    <Card className='shadow' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={video_manage} />
                        <Card.Body>
                            <Card.Title>
                                Managing videos
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
    
                    <Card className='shadow' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Sorting_media} />
                        <Card.Body>
                            <Card.Title>
                                Sorting Media
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
    
                    <Card className='shadow' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={history} />
                        <Card.Body>
                            <Card.Title>
                                History
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
               </div>
        </div>
        <div className="container-fluid w-100 d-flex justify-content-evenly pt-5 pb-5 shadow border-1">
                <div className="content p-2" style={{width:"500px"}}>
                    <h3 className='text-success'>Simple, Fast and Powerful <span className='text-warning'>Media Player</span></h3>
                    <h6 className='d-block pt-3'>Plays everything : </h6><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti esse alias ut rerum dolorum deserunt laborum,  </span>
                    <h6 className='d-block pt-3'>Manage Easily : </h6><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti esse alias ut rerum dolorum deserunt laborum,  </span>
                    <h6 className='d-block pt-3'>Watch History : </h6><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti esse alias ut rerum dolorum deserunt laborum,  </span>
               </div>
               <div className="video">
                    <iframe width="600" height="387" src="https://www.youtube.com/embed/bJ-3kld5lZk" title="【GMV】Alan Walker Style - Coming Home (Animation Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
        </div>
        </>
    )
}

export default LandingPage