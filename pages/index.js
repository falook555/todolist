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
      // console.log('refresh')
      getData()
    }, 10000);
    return () => clearInterval(interval);

  }, [])

  return (
    <div>
      <div className="card-group">
        <div className='card mt-2 ml-2 mr-1 mb-2' style={{ height: '1065px', backgroundColor: 'blue', color: 'white' }}>
          <h1 className='text-center mt-2 text-white'>
            <b>กฤษฎา อนันตะ</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr style={{ backgroundColor: '#0019D1' }}>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน</th>
              </tr>
            </thead>
            <tbody>
              {ict8.map((item8, i8) => {
                // console.log(item8.td_upDt == null ? 'เวลาออก : ' + item8.td_insDt : 'เวลากลับ : ' + item8.td_upDt)
                // item8.td_upDt == null ? item8.td_insDt : item8.td_upDt
                return <tr key={i8}>
                  <td style={{ backgroundColor: i8 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item8.td_dept.substring(0, 20)}...</td>
                  <td style={{ backgroundColor: i8 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item8.td_case.substring(0, 25)}...</td>
                  <td style={{ backgroundColor: item8.td_upDt == null ? 'red' : 'green', width: '130px' , textAlign:'center' }}>{moment(item8.td_upDt == null ? item8.td_insDt : item8.td_upDt).format('H:mm')} น.</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className='card mt-2 ml-1 mr-1 mb-2' style={{ height: '1065px', backgroundColor: 'blue', color: 'white' }}>
          <h1 className='text-center mt-2 text-white'>
            <b>สุจินต์ สุกกล้า</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr style={{ backgroundColor: '#0019D1' }}>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน</th>
              </tr>
            </thead>
            <tbody>
              {ict9.map((item9, i9) => {
                return <tr key={i9}>
                  <td style={{ backgroundColor: i9 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item9.td_dept.substring(0, 20)}...</td>
                  <td style={{ backgroundColor: i9 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item9.td_case.substring(0, 25)}...</td>
                  <td style={{ backgroundColor: item9.td_upDt == null ? 'red' : 'green', width: '130px' , textAlign:'center' }}>{moment(item9.td_upDt == null ? item9.td_insDt : item9.td_upDt).format('H:mm')} น.</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className='card mt-2 ml-1 mr-2 mb-2' style={{ height: '1065px', backgroundColor: 'blue', color: 'white' }}>
          <h1 className='text-center mt-2 text-white'>
            <b>กนต์ธร โทนทรัพย์</b>
          </h1>
          <table className="table table-striped h4">
            <thead>
              <tr style={{ backgroundColor: '#0019D1' }}>
                <th>สถานที่แจ้ง</th>
                <th>รายละเอียด</th>
                <th>เวลาทำงาน</th>
              </tr>
            </thead>
            <tbody>
              {ict13.map((item13, i13) => {
                return <tr key={i13}>
                  <td style={{ backgroundColor: i13 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item13.td_dept.substring(0, 20)}...</td>
                  <td style={{ backgroundColor: i13 % 2 == 1 ? '#0019D1' : '#001FFF' }}>{item13.td_case.substring(0, 25)}...</td>
                  <td style={{ backgroundColor: item13.td_upDt == null ? 'red' : 'green', width: '130px' , textAlign:'center' }}>{moment(item13.td_upDt == null ? item13.td_insDt : item13.td_upDt).format('H:mm')} น.</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}