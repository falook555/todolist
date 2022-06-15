import React, { Profiler } from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"

const Sidebar = () => {

    const [data, setData] = useState({})
    const router = useRouter()

    useEffect(() => {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)
        setData(decode)
    }, [])

    const savelist = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'savelist'
            },
        })
    }

    const homePage = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'dashboard'
            },
        })
    }

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a onClick={() => homePage()} className="brand-link">
                    <img src="static/dist/img/sswlogo.png" alt="ss" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Todolist</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="static/dist/img/default.jpg"className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a onClick={() => homePage()} className="d-block">{data.fullname}</a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a onClick={() => savelist()} className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        บันทึกรายการ
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar