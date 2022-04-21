import React from 'react'
import { useRouter } from 'next/router'
const Savework = () => {

    const router = useRouter()
    const { dep } = router.query
    return (
        <div>

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">กรอกข้อมูลการไปทำงาน</h1>
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
                        <form action='' method='POST'>
                            <div className="form-group">
                                <label htmlFor="Name">FName</label>
                                <input type="text" className="form-control" id="FName" name='fname' placeholder="Enter FName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="LName">LName</label>
                                <input type="text" className="form-control" id="LName" name='lname' placeholder="Enter LName" />
                            </div>
                            <div>
                                <button className='btn btn-success btn-block' type='submit'>submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Savework