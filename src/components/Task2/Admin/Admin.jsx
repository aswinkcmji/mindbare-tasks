import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './Admin.css'
import New from '../New/New'
function Admin() {
    
    const data={
        ADD:"ADD",
        DELETE:"DELETE",
        UPDATE:"UPDATE"
    }
    const [state,setState]=useState("ADD")
    const handle = (files) =>{
       
        console.log(files[0])
        
        
    }

  return (
    <div>
        <div className='container'>
            <h1 className='text-center text-info'>ADMIN PAGE</h1>
            <div className="admin-container ">
                <Link className='admin-btn' onClick={()=>setState(data.ADD)} to=""><button  value="ADD" className="admin-btn btn btn-info">{data.ADD} STOCK</button></Link>
                <Link className='admin-btn' onClick={()=>setState(data.DELETE)} to=""><button  value="DELETE" className='admin-btn btn btn-info'>{data.DELETE} STOCK</button></Link>
                <Link className='admin-btn' onClick={()=>setState(data.UPDATE)} to=""><button  value="UPDATE" className="admin-btn btn btn-info">{data.UPDATE} STOCK</button></Link>
            </div>
            <div className="outlet bg-light">
                <New data={state}/>
            </div>
            <div className="credentialsupload">
                <input className='btn btn-dark p-1 bg-dark' type="file" name="selectedfile" onChange={(e)=>handle(e.target.files)}/>
                <input className='btn btn-info' type="button" value="SAVE" />
                {}
            </div>
        </div>
    </div>
  )
}

export default Admin