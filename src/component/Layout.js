import React from 'react'
import Navbarr from './Navbar'
import Footer from './Footer'
import './Styles/Layout.css'
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <div className='Layout-container'>
            <Navbarr />
            <Outlet />
            <Footer />

        </div>
    )
}
