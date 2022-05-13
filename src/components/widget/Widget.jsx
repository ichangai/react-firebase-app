import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase";

function Widget({ type }) {
    const [amount, setAmount] = useState(null);
    const [diff, setdiff] = useState(null);

    let data = {};

    // temporary


    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                query: "users",
                link: "See all users",
                icon: <PersonOutlinedIcon style={{ color:"crimson", backgroundColor: "rgba(255,  0, 0, 0.2)" }} className="icon" />
            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                query: "orders",
                link: "See all orders",
                icon: <ShoppingCartIcon  style={{ color:"goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} className="icon" />
            };
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                query: "earnings",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnIcon style={{ color:"green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} className="icon" />
            };
            break;

        case "product":
            data = {
                title: "PRODUCTS",
                query: "products",
                link: "See Details",
                icon: <AccountBalanceWalletIcon  style={{ color:"purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} className="icon" />
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today =  new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() -1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() -2))
            // console.log(prevMonth);
            const lastMonthQuery = query(collection(db, data.query), 
            where("timeStamp", "<=", today), 
            where("timeStamp", ">", lastMonth)
            );
            const prevMonthQuery = query(collection(db, data.query), 
            where("timeStamp", "<=", lastMonth), 
            where("timeStamp", ">", prevMonth)
            );

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length);
        };
        fetchData()
    }, []);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{ data.isMoney && "$" } {amount} </span>
                <span className="link">{ data.link }</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget