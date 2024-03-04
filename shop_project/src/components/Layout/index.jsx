import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav'
import './index.module.css'

export default function Layout() {
  return (
    <>
        <Nav />
        <div className={{height: "100vh"}}>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}
