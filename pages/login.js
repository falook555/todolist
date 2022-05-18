import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import config from '../config'
import { useRouter } from 'next/router'
import md5 from 'md5'
import moment from 'moment'

const Api = config.api

const Login = () => {

    const router = useRouter()
    const date = moment().format('Y-M-D H:mm:ss')

    const True = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'dashboard',
                pathcrd: md5('dashboard'),
                d: date,
                dcrd: md5(date),
                res: 'success',
                rescrd: md5('success')
            },
        })
    }

    const Fail = () => {
        router.push({
            pathname: '/login',
            query: {
                path: 'login',
                pathcrd: md5('login'),
                d: date,
                dcrd: md5(date),
                res: 'fail',
                rescrd: md5('fail')
            },
        })
    }

    const [formLogin, setFormLogin] = useState({ username: '', password: '' })
    const [MsgErr, setMsgErr] = useState('')

    const onSubmit = async () => {
        try {
            let res = await axios.post(`${Api}/signin`, formLogin)
            localStorage.setItem('token', res.data.token)
            True()
        } catch (error) {
            console.log(error)
            if (error == 'Error: Request failed with status code 401') {
                setMsgErr('username หรือ password ไม่ถูกต้อง')
                Fail()
            }
            if (error == 'Error: Request failed with status code 400') {
                setMsgErr('กรุณากรอกข้อมูลให้ครบ')
                Fail()
            }
        }
    }

    return (
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <p className="h1"><b>ToDoList</b></p>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your Todolist</p>
                        <span className='text-red'>{MsgErr}</span>
                        <div className="input-group mb-3">
                            <input type="text" value={formLogin.username} className="form-control" id="username" placeholder="USERNAME"
                                onChange={e => {
                                    setFormLogin({ ...formLogin, username: e.target.value })
                                }}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" value={formLogin.password} className="form-control" id="password" placeholder="PASSWORD"
                                onChange={e => {
                                    setFormLogin({ ...formLogin, password: e.target.value })
                                }}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={onSubmit} className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login