import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <main className='inner'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout