import React from 'react'
import Add  from '../components/Add'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className="container">
            <div className="add"><Add/></div>
            <Link></Link>
        </div>
        </>
    )
}

export default Home