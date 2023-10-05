import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:"None",fontSize:"20px",}}> <i className="fa-solid fa-arrow-left-long fa-beat"></i> Back to home</Link>
    </div>
    <table className=' border border-2 table mt-5 mb-5 container'>
      <thead className='border'>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Tine Stamp</th>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>test</td>
          <td><a href="link added">https://</a></td>
          <td>04/10/2023</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory