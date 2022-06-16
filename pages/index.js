import moment from 'moment'
import Axios from 'axios'
import config from '../config'
import { useEffect, useState } from 'react'

const Api = config.api

export default function Home() {
  const [ict8, setIct8] = useState([])
  const [ict9, setIct9] = useState([])
  const [ict13, setIct13] = useState([])

  const getData = async () => {
    // let token = localStorage.getItem('token') , { headers: { "token": token } }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict008`)
      setIct8(res.data)
    } catch (error) {
      console.log(error)
    }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict009`)
      setIct9(res.data)
    } catch (error) {
      console.log(error)
    }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict013`)
      setIct13(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
    const interval = setInterval(() => {
      console.log('refresh')
      getData()
    }, 10000);
    return () => clearInterval(interval);

  }, [])

  return (
    <div>
      <div className="card-group">
        <div className='card mt-2 ml-2 mr-1' style={{ height: '1400px', backgroundColor: 'antiquewhite' }}>
          <h1 className='text-center mt-2'>
            <b>กฤษฎา อนันตะ</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน (นาที)</th>
              </tr>
            </thead>
            <tbody>
              {ict8.map((item8, i8) => {
                return <tr key={i8}>
                  <td>{item8.td_dept.substring(0, 9)}...</td>
                  <td>{item8.td_case.substring(0, 15)}...</td>
                  <td>{moment(item8.td_insDt).format('H:mm:ss')}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className='card mt-2 ml-1 mr-1' style={{ height: '1400px', backgroundColor: 'lightgreen' }}>
          <h1 className='text-center mt-2'>
            <b>สุจินต์ สุกกล้า</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน (นาที)</th>
              </tr>
            </thead>
            <tbody>
              {ict9.map((item9, i9) => {
                return <tr key={i9}>
                  <td>{item9.td_dept.substring(0, 9)}...</td>
                  <td>{item9.td_case.substring(0, 15)}...</td>
                  <td>{moment(item9.td_insDt).format('H:mm:ss')}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className='card mt-2 ml-1 mr-2' style={{ height: '1400px', backgroundColor: 'lightpink' }}>
          <h1 className='text-center mt-2'>
            <b>กนต์ธร โทนทรัพย์</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน (นาที)</th>
              </tr>
            </thead>
            <tbody>
              {ict13.map((item13, i13) => {
                return <tr key={i13}>
                  <td>{item13.td_dept.substring(0, 9)}...</td>
                  <td>{item13.td_case.substring(0, 15)}...</td>
                  <td>{moment(item13.td_insDt).format('H:mm:ss')}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}