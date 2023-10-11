import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../services/allApi'

function WatchHistory() {
  const [history,setHistory] = useState([])
  const getAllWatchHistory = async ()=>{
    //Make API call
    const { data } = await getHistory()
    setHistory(data)
  }
  useEffect(()=>{
    getAllWatchHistory()
  },[])
  // console.log(history);
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
        <th>Time Stamp</th>
      </thead>
      <tbody>
        {
          history?.length>0?
          history.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item.embededlink}>{item.embededlink}</a></td>
              <td>{item.timestamp}</td>
            </tr>
          ))
          :<div></div>
        }
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory