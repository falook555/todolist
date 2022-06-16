import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import jwt_decode from "jwt-decode"
import * as moment from 'moment';
import 'moment/locale/th';
moment.locale('th')

const Api = config.api


const Dashboard = () => {

    const [volumeworkall, setVolumeWorkAll] = useState(0)
    const [volumeworksucc, setVolumeWorkSucc] = useState(0)
    const [volumeworkunsucc, setVolumeWorkUnSucc] = useState(0)

    const getNUM = async () => {
        try {
            let token = localStorage.getItem('token')
            let decode = jwt_decode(token)
            // console.log(decode.username)
            let res = await axios.get(`${Api}/get-work-report/${decode.username}`)
            const status0 = 0
            const status1 = 0
            res.data.map((data, i) => {
                data.td_status == 0 ? status0++ : status1++
            })
            setVolumeWorkUnSucc(status0)
            setVolumeWorkSucc(status1)
            setVolumeWorkAll(status0 + status1)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNUM()
    }, [])

    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"><b>Dashboard <span className="text-primary">{moment().add(543, 'year').format('LL')}</span></b></h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3 className='text-white'>{volumeworkall} งาน</h3>
                                        <p>จำนวนงานทั้งหมดที่ได้รับ</p>
                                    </div>
                                    <div className="icon">
                                        <Icon icon="carbon:summary-kpi" />
                                    </div>
                                    <a className="small-box-footer">TOTAL NUMBER OF JOBS RECEIVED</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3 className='text-white'>{volumeworksucc} งาน</h3>
                                        <p>จำนวนงานที่ทำเสร็จเรียบร้อยแล้ว</p>
                                    </div>
                                    <div className="icon">
                                        <Icon icon="icon-park-outline:success" />
                                    </div>
                                    <a className="small-box-footer">TOTAL NUMBER OF JOBS SUCCESS</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>{volumeworkunsucc} งาน</h3>
                                        <p>จำนวนงานที่ยังทำไม่เสร็จ</p>
                                    </div>
                                    <div className="icon">
                                        <Icon icon="icon-park-outline:message-failed" />
                                    </div>
                                    <a className="small-box-footer">THE NUMBER OF UNFINISHED TASKS</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard