import React from 'react'
// import { useRouter } from 'next/router'

import DataTable from 'react-data-table-component';

const Savework = () => {

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Day',
            selector: row => row.day,
        },
        {
            name: 'Control',
            selector: row => row.control,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
            day: '456',
            control: 'asd',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
            day: '456',
            control: 'asd',
        },
        {
            id: 3,
            title: 'Ghostbusters',
            year: '1984',
            day: '456',
            control: 'asd',
        },
        {
            id: 4,
            title: 'Ghostbusters',
            year: '1984',
            day: '456',
            control: 'asd',
        },
        {
            id: 5,
            title: 'Ghostbusters',
            year: '1984',
            day: '456',
            control: 'asd',
        },
    ]

    // const router = useRouter()
    // const { dep } = router.query
    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">กรอกข้อมูลการทำงาน</h1>
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
                        <DataTable
                            columns={columns}
                            data={data}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Savework