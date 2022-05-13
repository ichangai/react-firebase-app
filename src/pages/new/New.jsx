import React from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from 'react';
// for adding data to the database
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
// functions we've called in firebase file
import { auth, db, storage } from "../../firebase";
// for adding users into the database
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({inputs, title}) => {
const [file, setFile] = useState("");
const [data, setData] = useState({});
const [per, setPerc] = useState(null);
const navigate = useNavigate();

useEffect(() => {  
  const uploadFile = () => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, file.name);

  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress);
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((prev) => ({ ...prev, img: downloadURL }));
    });
  }
);
  }
  file && uploadFile();
}, [file])

// fetching data values from the input
const handleInput = (e) => {
  const id = e.target.id;
  const value = e.target.value;

  // ...data => is to allow to add/append more more data
  setData({ ...data, [id]: value})
};

// console.log(data);

// function to add to database
const handleAdd = async (e) => {
  e.preventDefault();
  try{
    const res = await createUserWithEmailAndPassword(
      auth, 
      data.email, 
      data.password
      );
   await setDoc(doc(db, "users", res.user.uid), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    navigate(-1);
  }catch(err){
    console.log(err)
  }


}

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{ title }</h1>
          </div>
          <div className="bottom">
              <div className="left">
              <img src={
                file ? URL.createObjectURL(file) 
                : 
                "https://www.pngkey.com/png/detail/260-2601842_upload-cad-files-sign.png"
                } 
            />
              </div>
              <div className="right">
                <form onSubmit={ handleAdd }>
                <div className="formInput">
                      <label htmlFor='file'>
                        Image: <DriveFolderUploadOutlined className="icon" />
                      </label>
                          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display:"none" }}/>
                    </div>
                    {inputs.map(input => (
                        <div className="formInput" key={ input.id }>
                            <label htmlFor="">{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} id={input.id} onChange={handleInput} />
                        </div>
                    )
                    )}
                    <button disabled={per !== null && per < 100} type="submit">Submit</button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default New