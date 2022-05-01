import React from 'react'
import {Link} from 'react-router-dom'
import './Land.css'
function Home() {
  return (
    <div>
        <div className="container">
            <div className="btn-div bg-dark">
                <Link to="/Task1"><button className=' btn btn-info task'>TASK1</button></Link>
                <Link to="/Task2"><button className='btn btn-info task'>TASK2</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home