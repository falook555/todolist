import React from 'react'
import { useRouter } from 'next/router'
import md5 from 'md5'
import moment from 'moment'

const Sidebar = () => {
    const date = moment().format('YYYYMMDDHmmss')
    const router = useRouter()

    const savelist = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'savelist',
                pathcrd: md5('savelist'),
                d: date,
                dcrd: md5(date)
            },
        })
    }
    const homePage = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'dashboard',
                pathcrd: md5('dashboard'),
                d: date,
                dcrd: md5(date)
            },
        })
    }
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a onClick={() => homePage()} className="brand-link">
                    <img src="static/dist/img/AdminLTELogo.png" alt="ss" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">To Do List</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="static/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a onClick={() => homePage()} className="d-block">Konthorn Thonsap</a>
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