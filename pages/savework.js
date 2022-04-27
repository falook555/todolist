import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import config from '../config'
import axios from 'axios'
import { MDBDataTableV5 } from 'mdbreact';
import md5 from 'md5'
import moment from 'moment'

const Api = config.api



const Savework = () => {

    useEffect(() => {
        getList()
    }, []);

    const userID = 'ict013'
    const [data, setData] = useState([])
    const [datatable, setDatatable] = React.useState({})
    const [formData, setFormData] = useState({ username: userID, going: null, doing: null })
    const [isButton, setIsButton] = useState(false)
    const [txtButtin, setTxtButton] = useState('เพิ่มข้อมูล')

    const date = moment().format('YYYYMMDDHmmss')
    const router = useRouter()

    const Success = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'savelist',
                pathcrd: md5('savelist'),
                d: date,
                dcrd: md5(date),
                res: 'success',
                rescrd: md5('success')
            },
        })
    }

    const Fail = () => {
        router.push({
            pathname: '/backend',
            query: {
                path: 'savelist',
                pathcrd: md5('savelist'),
                d: date,
                dcrd: md5(date),
                res: 'success',
                rescrd: md5('success')
            },
        })
    }

    const onSubmit = async () => {
        // console.log('ff')
        // console.log(formData)
        setIsButton(true)
        setTxtButton('กำลังบันทึก...')

        try {
            let res = await axios.post(`${Api}/add-worklist`, formData)
            console.log(res)
            if (res.status == 200  && res.data.status == 'ok' ) {
                // getList()
                setIsButton(false)
                setTxtButton('เพิ่มข้อมูล')
                 await getList()
                // Success()
                // setFormData({ ...formData, doing:'', going:'' })

            }else{
                Fail()
            }


        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            label: 'อาการที่แจ้งมา',
            field: 'td_content',
        },
        {
            label: 'จากหน่วยงานไหน',
            field: 'td_dept',
        },
        {
            label: 'เวลาไป (นาที)',
            field: 'td_insDt',
        },
        {
            label: 'เวลากลับ (นาที)',
            field: 'td_upDt',
        },
        {
            label: 'สถานะ',
            field: 'td_status',
            sort: 'desc',
        },
    ]

    const getList = async () => {
        try {
            let res = await axios.get(`${Api}/get-work-all/${userID}`)
            console.log(res.data)
            setData(res.data)
            setDatatable(
                {
                    columns: columns,
                    rows: res.data
                }
            )
        } catch (error) {
            console.log(error)
        }
    }



    // const router = useRouter()
    // const { dep } = router.query

    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="m-0">บันทึกรายการ</h1>
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
                <section className="content pb-1">
                    <div className="container-fluid">
                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">เพิ่มข้อมูล</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="doing">อาการที่แจ้ง</label>
                                    <input type="text" value={formData.doing} className="form-control" id="doing" placeholder="อาการที่แจ้ง"
                                        onChange={e => {
                                            setFormData({ ...formData, doing: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="going">หน่วยงานที่แจ้ง</label>
                                    <input type="text" value={formData.going} className="form-control" id="going" placeholder="หน่วยงานที่แจ้ง"
                                        onChange={e => {
                                            setFormData({ ...formData, going: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="button" onClick={onSubmit} className="btn btn-success btn-block" disabled={isButton} >{txtButtin}</button>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="card card-info">
                            <div className="card-header">
                                <h3 className="card-title">ตารางแสดงข้อมูล</h3>
                            </div>
                            <div className="card-body">
                                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Savework