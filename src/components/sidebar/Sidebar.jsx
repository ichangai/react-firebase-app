import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {Link} from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">BrandeX</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" >Main</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <SupervisedUserCircleOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <li>
            <CardGiftcardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <ShoppingCartIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL </p>

          <li>
            <QueryStatsOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color__option" ></div>
        <div className="color__option"></div>
        </div>
    </div>
  );
}

export default Sidebar;
