import MoreVertIcon  from '@mui/icons-material/MoreVert';
import React from 'react'
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Sales Made today</p>
        <p className="amount">12,000 kshs</p>
        <p className="desc">Previous transactions processing. Last payments may not be included</p>
        <div className="summary">
          <div className="item">
              <div className="itemTitle"> Target </div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize="small"/>
                <div className="resultAmount"> 123k kshs </div>
              </div>
          </div>
          <div className="item">
              <div className="itemTitle"> Last Week </div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize="small"/>
                <div className="resultAmount"> 123k kshs </div>
              </div>
          </div>
          <div className="item">
              <div className="itemTitle"> Last Month </div>
              <div className="itemResult negative">
                <KeyboardArrowDownOutlined fontSize="small"/>
                <div className="resultAmount"> 123k kshs </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured