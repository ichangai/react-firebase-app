import { useState, useEffect} from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns } from '../../datasource';
import {Link} from "react-router-dom";
import {db} from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

function Datatable() {
const [data, setData] = useState([]);

useEffect(() => {
  // const fetchData = async () => {
  //   let list = [];
  //   try{
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       list.push({id:doc.id, ...doc.data() })
  //   });
  //   setData(list);
  //   }catch(err){
  //       console.log(err)      
  //   }
  // };
  // fetchData()

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

const handleDelete = async(id) => {
  try{  
    await deleteDoc(doc(db, "users", id));
    setData(data.filter((item) => item.id !== id));
  }catch(err){
      console.log(err);
  }
};

console.log(data);

  const actionColumn = [
    {field: "action", headerName: "Action", width: 200, renderCell:(params) =>{
        return(
          <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" style={{ cursor: "pointer" }} onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
    }}
  ]
  return (
    <div className="datatable" >
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    </div>
  )
}

export default Datatable