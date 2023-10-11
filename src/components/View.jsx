import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideo } from '../services/allApi'

function View({ uploadVideoServerResponse }) {
    const [deleteStatVideo,setDeleteStatVideo] = useState(false)
    const [allVideos,setAllVideos] = useState([])
    const getAllUploadedVideos = async ()=>{
        const { data } = await getAllVideo()
        setAllVideos(data)
    }
    // console.log(allVideos);
    useEffect(() => { 
        setDeleteStatVideo(false)
        getAllUploadedVideos() }, [uploadVideoServerResponse,deleteStatVideo])  // to manuplate while fn component rendering
    return (
        <Row>
            {
                allVideos.length>0?
                allVideos.map(video=> (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <VideoCard displaydata={video} setDeleteStatVideo={setDeleteStatVideo} />
                    </Col>
                ))
                : <div></div> //else
            }
            
        </Row>
    )
}

export default View