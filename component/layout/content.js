import React from 'react'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'
import Savework from '../../pages/savework'
import Test from '../../pages/test'
import md5 from 'md5'


const Content = () => {
    const router = useRouter()
    const { path, pathcrd } = router.query
    // console.log(path)

    return (
        <div>
            {
                path == 'savelist' && pathcrd == md5(path) ? <Savework></Savework> 
                : path == 'test' && pathcrd == md5(path) ? <Test></Test> 
                : <Dashboard></Dashboard>
            }
        </div>
    )
}

export default Content