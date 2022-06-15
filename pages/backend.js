import React from 'react'
import Content from '../component/layout/content'
import Footer from '../component/layout/footer'
import Nav from '../component/layout/navbar'
import Sidebar from '../component/layout/sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Backend = () => {

    const [checkToken, setcheCkToken] = useState('')
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token == null || token == '') {
            router.push({
                pathname: '/login',
                query: {
                    path: 'failed'
                },
            })
        } else {
            checkToken = setcheCkToken(token)
        }
    }, [])

    return (
        <div>
            {checkToken == '' || checkToken == null ?
                ''
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