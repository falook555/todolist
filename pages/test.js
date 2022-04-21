// import React, { useEffect, useState } from 'react'
// import NavHeader from '../component/NavHeader'
// import { useRouter } from 'next/router'


// const Queue = (value) => {
//   const router = useRouter()
//   const [profile, setProfile] = useState({})
//   useEffect(() => {
//     console.log('1234')
//     localStorage.setItem('path', 'queue');
//     async function getData() {
//       const liff = (await import('@line/liff')).default
//       await liff.ready
//       const profile = await liff.getProfile()
//       setProfile(profile)
//     }
//     // getData()
//   })

//   const onDep = (value) => {
//     router.push({
//       pathname: '/queue-date',
//       query: { dep: value },
//     })

//   }

//   return (
//     <div>
//       <NavHeader />
//       <div className='text-center' style={{ marginTop: 100 }}>
//         <h3 style={{ color: '#3f51b5' }}>เลือกแผนกจองคิว</h3>
//         <div className="card green" style={{ marginTop: 50 }} onClick={() => onDep(1)}>
//           <h1>แพทย์แผนไทย</h1>
//         </div>
//         <div className="card purple" style={{ marginTop: 50 }} onClick={() => onDep(2)}>
//           <h1>ทันตกรรม</h1>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Queue

//--------------------------------------------------------------- รับ GET
// import React from 'react'
// import { useRouter } from 'next/router'


// const QueueDate = () => {
//   const router = useRouter()
//   const {dep} = router.query
//   return (
//     <div>queue-date {dep}</div>
//   )
// }

// export default QueueDate
import React from 'react'

const Test = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">TEST</h1>
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

export default Test