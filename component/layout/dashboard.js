import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useEffect, useState } from 'react';
const Api = config.api

const Dashboard = () => {

    const getNUM = async () => {
        try {
            let res = await axios.get(`${Api}/get-work-report/ict013`)
            const status0 = 0
            const status1 = 0
            res.data.map((data, i) => {
                data.td_status == 0 ? status0++ : status1++
            })
            setVolumeWorkUnSucc(status0)
            setVolumeWorkSucc(status1)
            setVolumeWorkAll(status0+status1)
            // setVolumeWorkAll(res.data.length)
            // console.log(status0 +' '+ status1)

        } catch (error) {
            console.log(error)
        }
    }

    const [volumeworkall, setVolumeWorkAll] = useState(0)
    const [volumeworksucc, setVolumeWorkSucc] = useState(0)
    const [volumeworkunsucc, setVolumeWorkUnSucc] = useState(0)

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
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
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
                                        <h3>{volumeworkall}</h3>
                                        <p>จำนวนงานทั้งหมด</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>{volumeworksucc}</h3>
                                        <p>จำนวนงานที่ทำเสร็จทั้งหมด</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>{volumeworkunsucc}</h3>
                                        <p>จำนวนงานที่ยังทำไม่เสร็จ</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
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