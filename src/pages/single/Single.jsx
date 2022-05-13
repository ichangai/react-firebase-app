import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from '../../components/navbar/Navbar'
import Chart from  '../../components/chart/Chart'
import List from  '../../components/table/Table'
import './single.scss'

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
                <h1 className="title" >Information</h1>
                <div className="item">
                  <img src="/img/hc-5.jpg" alt="avatar" className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle" style={{ fontSize: "24px"  }}>Michael Smith</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemKey">mike@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemKey">0707022345</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemKey">Prime Plaza St. 234 Nairobi</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemKey">Kenya</span>
                    </div>
                  </div>
                </div>

            </div>
            <div className="right">
                <Chart aspect={3/1} title="User Spending(last six months)" />
            </div>
          </div>
          <div className="bottom">
             <h1 className="title" >Last Transactions</h1>
              <List />
          </div>
      </div>
    </div>
  )
}

export default Single