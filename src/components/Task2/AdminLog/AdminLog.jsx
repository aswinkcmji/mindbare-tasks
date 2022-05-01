import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './AdminLog.css'

function AdminLog() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    username:"",
    password:""
  })
  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
  }
  const submit=()=>{
    if(data.username==="root123"&&data.password==="123"){
      navigate("/Admin")
      alert("login successfully")
    }
    else{
      alert("invalid username")
    }
  }
  
  return (
    <div>
      <div className="logform ">
        <form className='logform-form text-center rounded bg-dark p-5' action="" autoComplete='off' onSubmit={(e)=>submit(e)} >
          <h2 className='text-info'>ADMIN LOG</h2>
          <input onChange={(e)=>handle(e)} placeholder='Username' type="text" name="" value={data.username} id="username" required=" "/>
          <input onChange={(e)=>handle(e)} placeholder='Password' type="password" name="" value={data.password} id="password" required=" "/>
          <input className='btn btn-info' type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  )
}

export default AdminLog