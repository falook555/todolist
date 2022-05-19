import React from 'react'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'
import Savework from '../../pages/savework'


const Content = () => {
    const router = useRouter()
    const { path } = router.query

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