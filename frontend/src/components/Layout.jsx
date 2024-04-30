import React from 'react'
import {CardsGroup, Navbar, } from './index'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
        <Navbar/>
        <CardsGroup />
        {/* <Posts /> */}
        <Outlet />
    </div>
  )
}

export default Layout