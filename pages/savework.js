import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import config from '../config'
import axios from 'axios'
import { MDBDataTableV5 } from 'mdbreact';
import md5 from 'md5'
import moment from 'moment'
import Swal from 'sweetalert2'
import 'toastr2/dist/toastr.min.css';
import jwt_decode from "jwt-decode"
import { Modal, Button } from 'antd';

const Api = config.api

const Savework = () => {
    // let [checkToken, setcheCkToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)
        // checkToken = setcheCkToken(token)
        // checkToken == '' ? console.log('null EF') : console.log('Not null EF')
        setProfile(decode)
        setFormData({ ...formData, username: decode.username })
        getList()

    }, [])

    //---------------------------------------------------------------------------------------------------------------------------- SET ตัวแปร
    const [data, setData] = useState([])
    const [datatable, setDatatable] = React.useState({})
    const [profile, setProfile] = React.useState({})
    const [formData, setFormData] = useState({ username: '', dept: '', case: '' })
    const [formRepair, setFormRepair] = useState({ repair: '' })
    const [isButton, setIsButton] = useState(true)
    const [txtButtin, setTxtButton] = useState('เพิ่มข้อมูล')
    const [id, setID] = useState(0)
    const date = moment().format('Y-M-D H:mm:ss')
    const [isModalVisible, setIsModalVisible] = useState(false);
    //---------------------------------------------------------------------------------------------------------------------------- SET ตัวแปร

    console.log(formRepair)
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

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'การเพิ่มข้อมูลสำเร็จ',
            showConfirmButton: false,
            timer: 2000
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
                res: 'fail-No-Data',
                rescrd: md5('fail-No-Data')
            },
        })

        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'การเพิ่มข้อมูลไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const onSubmit = async () => {
        // console.log(formData)
        setIsButton(true)
        setTxtButton('กำลังบันทึก...')
        try {
            let res = await axios.post(`${Api}/add-worklist`, formData)
            // console.log(res)
            if (res.status == 200 && res.data.status == 'ok') {
                setIsButton(true)
                setTxtButton('เพิ่มข้อมูล')
                await getList()
                Success()
                setFormData({ ...formData, case: '', dept: '' })
            } else {
                setIsButton(true)
                setTxtButton('เพิ่มข้อมูล')
                await getList()
                Fail()
                setFormData({ ...formData, case: '', dept: '' })
            }


        } catch (error) {
            console.log(error)
        }
    }

    //---------------------------------------------------------------------------------------------------------------------------- UPDATE STATUS

    // const upStatusClick = async (e) => {
    //     // console.log(e)
    //     // console.log(profile)


    // }
    //---------------------------------------------------------------------------------------------------------------------------- UPDATE STATUS


    //---------------------------------------------------------------------------------------------------------------------------- DELETE DATA
    const delClick = async (e) => {

        // alert('คุณต้องการลบรายการนี้จริงหรือไม่ : ' + e)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            // console.log(result)
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                let delARR = {
                    'username': profile.username,
                    td_id: e
                }

                // console.log('del : ' + profile.username + ' : ' + e)

                try {
                    let res = await axios.post(`${Api}/delete-list`, delARR)
                    // console.log('ress : ' + res)
                    if (res.status == 200 && res.data.status == 'ok') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'ลบรายการเรียบร้อย',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        getList()
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'เกิดข้อผิดพลาด',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        getList()
                    }
                } catch (error) {
                    console.log(error)
                }


            }
        })
    }
    //---------------------------------------------------------------------------------------------------------------------------- DELETE DATA


    //---------------------------------------------------------------------------------------------------------------------------- COLUMNS
    const columns = [
        {
            label: '#',
            field: 'td_id',
        },
        {
            label: 'วัน/เดือน/ปี',
            field: 'date_save',
        },
        {
            label: 'สถานที่แจ้ง',
            field: 'td_dept',
        },
        {
            label: 'อาการที่แจ้ง',
            field: 'td_case',
        },
        {
            label: 'วิธีแก้ปัญหา',
            field: 'td_repair',
        },
        {
            label: 'Action',
            field: 'action',
        },
    ]
    //---------------------------------------------------------------------------------------------------------------------------- POST DATA



    const getList = async () => {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)

        const userID = decode.username
        // console.log('dd')
        //---------------------------------------------------------------------------------------------------------------------------- POST DATA
        try {
            let res = await axios.get(`${Api}/get-work-all/${userID}`, { headers: { "token": token } })
            // console.log(res.data)
            setData(res.data)
            let dataARR = []

            res.data.map((item, i) => {
                let timeGo = moment(item.td_insDt).format('Y-M-D')
                let colorBTN = item.td_status == 0 ? 'btn btn-warning btn-sm' : 'btn btn-success btn-sm'
                let icon = item.td_status == 0 ? 'fas fa-edit' : 'fas fa-user-check'
                let repair = item.td_repair == null ? '-' : item.td_repair

                dataARR.push(
                    {
                        'td_id': i + 1,
                        'date_save': timeGo,
                        'td_dept': item.td_dept,
                        'td_case': item.td_case,
                        'td_repair': repair,
                        'action': (
                            <div className="btn-group">
                                <button type="button" className='btn btn-warning btn-sm' onClick={() => showModal(item.td_id)} >
                                    <i className='fas fa-edit' />
                                </button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => delClick(item.td_id)}>
                                    <i className="fa fa-trash" />
                                </button>
                            </div>
                        )
                    }

                )
            })

            setDatatable(
                {
                    columns: columns,
                    rows: dataARR
                }
            )
        } catch (error) {
            console.log(error)
        }
        //---------------------------------------------------------------------------------------------------------------------------- POST DATA

    }


    const showModal = (id) => {
        setID(id)
        // console.log(id)
        setIsModalVisible(true);
    }
    const handleOk = async() => {
        setIsModalVisible(false);

            let data = {
                'repair': formRepair.repair,
                'id': id
            }

        console.log(id)
            try {
                let res = await axios.post(`${Api}/up-repair`, data)
                // console.log(res)
                if (res.status == 200 && res.data.status == 'ok') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ปรับสถานะเรียบร้อย',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setFormRepair({ repair: '' })
                    getList()
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'การปรับสถานะมีปัญหา',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getList()
                }
            } catch (error) {
                console.log(error)
            }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="m-0">บันทึกรายการ <span className='text-primary'><b>{profile.fullname + ' ' + profile.username}</b></span></h1>
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
                                    <label htmlFor="case">อาการที่แจ้ง</label>
                                    <input type="text" value={formData.case} className="form-control" id="case" placeholder="อาการที่แจ้ง"
                                        onChange={e => {
                                            setFormData({ ...formData, case: e.target.value })
                                            if (e.target.value != '' && formData.dept != '') {
                                                setIsButton(false)
                                            } else {
                                                setIsButton(true)
                                            }
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dept">หน่วยงานที่แจ้ง</label>
                                    <input type="text" value={formData.dept} className="form-control" id="dept" placeholder="หน่วยงานที่แจ้ง"
                                        onChange={e => {
                                            setFormData({ ...formData, dept: e.target.value })
                                            if (formData.case != '' && e.target.value != '') {
                                                setIsButton(false)
                                            } else {
                                                setIsButton(true)
                                            }
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
                                <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} fullPagination />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            {/* {console.log(isModalVisible)} */}
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <div className="form-group">
                    <label htmlFor="repair">วิธีการแก้ปัญหา</label>
                    <input type="text" value={formRepair.repair} className="form-control" id="repair" placeholder="วิธีการแก้ปัญหา"
                        onChange={e => {
                            setFormRepair({ ...formRepair, repair: e.target.value, id: e })
                        }}
                    />
                </div>
            </Modal>


        </div>
    )
}

export default Savework