import React from 'react'
import Content from '../component/layout/content'
import Footer from '../component/layout/footer'
import Nav from '../component/layout/navbar'
import Sidebar from '../component/layout/sidebar'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import md5 from 'md5'
import moment from 'moment'
import jwt_decode from "jwt-decode"

const Backend = () => {


    let [checkToken, setcheCkToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        checkToken = setcheCkToken(token)
    }, [])

    return (

        <div>
            {checkToken == null ? window.location.href = 'http://localhost:3000/login'
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