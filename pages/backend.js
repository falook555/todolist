import React from 'react'
import Content from '../component/layout/content'
import Footer from '../component/layout/footer'
import Nav from '../component/layout/navbar'
import Sidebar from '../component/layout/sidebar'
import { useEffect, useState } from 'react'
const Backend = () => {

    let [checkToken, setcheCkToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        // console.log(token)
        checkToken = setcheCkToken(token)
    }, [])

    return (
        <div>
            {/* {console.log(checkToken)} */}
            {checkToken == '' || checkToken == null ? <a href='http://localhost:3000/login' style={{ marginTop: '20%', marginLeft: '45%' }} type="button" className="btn btn-warning">กลับไปหน้าLogin</a>
                :
                <>
                    <Nav></Nav>
                    <Sidebar></Sidebar>
                    <Content></Content>
                    <Footer></Footer>
                </>
            }
        </div>
    )
}

export default Backend