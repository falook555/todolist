import React from 'react'
import { useRouter } from 'next/router'
import md5 from 'md5'
import moment from 'moment'

const Nav = () => {

  const router = useRouter()
  const date = moment().format('Y-M-D H:mm:ss')

  const Logout = () => {
    router.push({
      pathname: '/login',
      query: {
        path: 'login',
        pathcrd: md5('login'),
        d: date,
        dcrd: md5(date),
        res: 'logout',
        rescrd: md5('logout')
      },
    })
  }

  const logOut = () => {
    localStorage.removeItem('token')
    Logout()
  }


  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">หน้าแรก</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={logOut} role="button">
              <i className="fas fa-sign-out-alt" />
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}

    </div>
  )
}

export default Nav