import moment from 'moment'
import Axios from 'axios'
import config from '../config'
import { useEffect, useState } from 'react'

const Api = config.api

export default function Home() {
  // const date = moment().format('H:mm')
  const [ict8, setIct8] = useState([])
  const [ict9, setIct9] = useState([])
  const [ict13, setIct13] = useState([])
  // console.log(ict8)

  const getData = async () => {
    // let token = localStorage.getItem('token') , { headers: { "token": token } }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict008`)
      setIct8(res.data)
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict009`)
      setIct9(res.data)
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
    try {
      let res = await Axios.get(`${Api}/get-work-all/ict013`)
      setIct13(res.data)
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="card-group">
        <div className="col-4">
          <h1 className='text-center'>
            <b>กฤษฎา</b>
          </h1>
          <table className="table table-sm mt-3">
            <thead>
              <tr>
                <th>หมายเหตุ</th>
                <th>เวลาไป</th>
                <th>เวลากลับ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {ict8.map((item, i) => {
                let color = item.td_status == 0 ? 'fa fa-circle text-danger' : 'fa fa-circle text-info'
                let timeOutIct8 = item.td_upDt == null ? 'ยังไม่กลับ' : moment(item.td_upDt).format('H:mm')
                return <tr key={i}>
                  <td>{item.td_content}</td>
                  <td>{moment(item.td_insDt).format('H:mm')}</td>
                  <td>{timeOutIct8}</td>
                  <td><i className={color} /></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h1 className='text-center'>
            <b>สุจินต์</b>
          </h1>
          <table className="table table-sm mt-3">
            <thead>
              <tr>
                <th>หมายเหตุ</th>
                <th>เวลาไป</th>
                <th>เวลากลับ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {ict9.map((item, i) => {
                let color = item.td_status == 0 ? 'fa fa-circle text-danger' : 'fa fa-circle text-info'
                let timeOutIct9 = item.td_upDt == null ? 'ยังไม่กลับ' : moment(item.td_upDt).format('H:mm')
                return <tr key={i}>
                  <td>{item.td_content}</td>
                  <td>{moment(item.td_insDt).format('H:mm')}</td>
                  <td>{timeOutIct9}</td>
                  <td><i className={color} /></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h1 className='text-center'>
            <b>กนต์ธร</b>
          </h1>
          <table className="table table-sm mt-3">
            <thead>
              <tr>
                <th>หมายเหตุ</th>
                <th>เวลาไป</th>
                <th>เวลากลับ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {ict13.map((item, i) => {
                let color = item.td_status == 0 ? 'fa fa-circle text-danger' : 'fa fa-circle text-info'
                let timeOutIct13 = item.td_upDt == null ? 'ยังไม่กลับ' : moment(item.td_upDt).format('H:mm')
                return <tr key={i}>
                  <td>{item.td_content}</td>
                  <td>{moment(item.td_insDt).format('H:mm')}</td>
                  <td>{timeOutIct13}</td>
                  <td><i className={color} /></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}