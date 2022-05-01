import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
function Home() {
  return (
    <div>
        <div className="header"><Header/></div>
        <div className="outlet"><Outlet/></div>
    </div>
  )
}

export default Home