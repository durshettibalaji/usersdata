// import logo from './logo.svg';
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import PageNation from "./components/PageNation";


function App() {
  const [userArray,setuserArray]=useState([]);
  const [userData,setuserDate]=useState([]);
  const fetchUsers = async () => {
    const response = await axios
      .get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .catch((err) => {
        console.log("ERR", err);
      });
      setuserArray(response.data);
      setuserDate(response.data.slice(0,10));
      // dispatch(fetchArray(response.data));
      // console.log(response.data[0]);
  };
  useEffect(()=>{fetchUsers()},[]);

  const pageHandler=(page)=>
  {
    setuserDate(userArray.slice((page*10)-10,10*page))
  }
  return (
    
    <div className="App">
      <h1>User</h1>
      <table>
        <thead>
        <tr>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Age</th>
          <th>Web</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
      {
        userData.map((ele)=>{
       return   <tr key={ele.id}><th>{ele.first_name}</th>
       <th>{ele.last_name}</th>
       <th>{ele.age}</th>
       <th>{<a href={ele.web}>{ele.web}</a>}</th>
       <th>{ele.email}</th></tr>
        })

      }
      </tbody>
      </table>
      <PageNation data={userArray} pageHandler={pageHandler}/>
    </div>
  );
}

export default App;
