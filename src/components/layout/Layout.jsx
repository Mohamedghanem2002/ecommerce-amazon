import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container pb-[240px] pt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}