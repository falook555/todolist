import React from 'react'
import moment from 'moment'

const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <strong>Copyright © 2021 - {moment().format("YYYY")} <a href='https://www.facebook.com/profile.php?id=100080703297745' target={'_blank'}>กนต์ธร โทนทรัพย์</a> All rights reserved.</strong>
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 0.0.1
                </div>
            </footer>

        </div>
    )
}

export default Footer