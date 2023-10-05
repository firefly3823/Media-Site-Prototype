import React from 'react'
import Add  from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Home() {
    return (
        <>
        <div className="container d-flex justify-content-between align-items-center mb-5 mt-5">
            <div className="add"><Add/></div>
                <Link style={{ textDecoration: "none", color: "Black" }} to={'/watch-history'}>Watch history</Link>
        </div>
        <Row className="container-fluid w-100">
            <Col lg={9} className='all_videos'>
                <h3>All Videos</h3>
                <div className="videos pb-3">
                    <View/>
                </div>
            </Col>
            <Col lg={3} className='category'>
                <Category/>
            </Col>
        </Row>
        </>
    )
}

export default Home