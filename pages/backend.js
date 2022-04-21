import React from 'react'
import Content from '../component/layout/content'
import Footer from '../component/layout/footer'
import Nav from '../component/layout/navbar'
import Sidebar from '../component/layout/sidebar'

const Backend = () => {
    const o = 3
    
    return (    
        <div>
            <Nav></Nav>
            <Sidebar></Sidebar>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Backend