import React from 'react'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'
import Savework from '../../pages/savework'
import md5 from 'md5'


const Content = () => {
    const router = useRouter()
    const { path, pathcrd } = router.query

    return (
        <div>
            {
                path == 'savelist' ? <Savework></Savework> 
                : <Dashboard></Dashboard>
            }
        </div>
    )
}

export default Content