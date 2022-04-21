import React from 'react'
import { useRouter } from 'next/router'
import md5 from 'md5'
import Dashboard from './dashboard'
import Savework from '../../pages/savework'
import Test from '../../pages/test'


const Content = () => {
    const router = useRouter()
    // const onRoute = () => {
    //     router.push({
    //         pathname: '/savework',
    //         query: {
    //             route        : 'savelist',
    //             routecrd     : md5('savelist')
    //         },
    //     })

    // }

    const { path } = router.query
    console.log(path)

    return (
        <div>
            {path == 'savelist' ? <Savework></Savework> : path == 'test' ?  <Test></Test>: <Dashboard></Dashboard>}
            

        </div>
    )
}

export default Content