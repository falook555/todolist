import React from 'react'
import { useRouter } from 'next/router'

const Nav = () => {

  const router = useRouter()

  const homePage = () => {
    router.push({
      pathname: '/backend',
      query: {
        path: 'dashboard'
      },
    })
  }


  const logOut = () => {
    localStorage.removeItem('token')
    router.push({
      pathname: '/login',
      query: {
        path: 'login'
      },
    })
  }


  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a onClick={() => homePage()} className="nav-link">หน้าแรก</a>
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

    </div>
  )
}

export default Nav