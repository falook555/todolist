import React from 'react'
import Content from '../component/layout/content'
import Footer from '../component/layout/footer'
import Nav from '../component/layout/navbar'
import Sidebar from '../component/layout/sidebar'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import md5 from 'md5'
import moment from 'moment'

const Backend = () => {


    let [checkToken, setcheCkToken] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('token')
        // console.log(token)
        checkToken = setcheCkToken(token)
        // checkToken == '' ? console.log('null EF') : console.log('Not null EF')
    }, [])

    return (

        <div>
            {checkToken == null ? window.location.href = "http://localhost:3000/login"
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