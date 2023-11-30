import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const Layout = (props) => {
  return (
    <div>

        <Navbar />

        {props.children}

        <Footer />

    </div>
  )
}

export default Layout
