import React from 'react'
// import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import config from '../config'
import axios from 'axios'
import { MDBDataTableV5 } from 'mdbreact';

const Api = config.api
const Savework = () => {

    useEffect(() => {
        getList()
    }, []);
    const userID = 'ict013'
    const [data, setData] = useState([])
    const [datatable, setDatatable] = React.useState({})
    const [formData, setFormData] = useState({ username:userID, going: null, doing: null })
    const [isButton, setIsButton] = useState(false)
    const [txtButtin, setTxtButton] = useState('เพิ่มข้อมูล')

    const onSubmit = async () => {
        // console.log('ff')
        // console.log(formData)
        setIsButton(true)
        setTxtButton('กำลังบันทึก...')

        try {
            let res = await axios.post(`${Api}/add-worklist`, formData)
            if (res.status == 200) {
                setIsButton(false)
                setTxtButton('เพิ่มข้อมูล')
                getList()
            }


        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            label: 'ไปทำอะไร',
            field: 'td_content',
        },
        {
            label: 'ที่ไหน',
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
            setData(res.data)
            setDatatable(
                {
                    columns: columns,
                    rows: res.data
                }
            )
            // console.log(res.data)
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
                        <div className="row mb-2">
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
                <section className="content">
                    <div className="container-fluid">

                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">เพิ่มข้อมูล</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="doing">ไปทำอะไร</label>
                                    <input type="text" value={formData.doing} className="form-control" id="doing" placeholder="ไปทำอะไร"
                                        onChange={e => {
                                            setFormData({ ...formData, doing: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="going">ไปที่ไหน</label>
                                    <input type="text" value={formData.going} className="form-control" id="going" placeholder="ไปที่ไหน"
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