// import logo from './logo.svg';
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import PageNation from "./components/PageNation";
import { fetchdata, setpages } from "./Redux/Action/actions";


function App() {
  const dispatch=useDispatch();
  const state = useSelector((state)=> state);
  const [userArray,setuserArray]=useState([]);
  const [userData,setuserDate]=useState([]);
  const fetchUsers = async () => {
    const response = await axios
      .get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then(data=>{
      dispatch(fetchdata(data.data));
      dispatch(setpages(data.data.slice(0,10)));
        // console.log(data.data)
      })
      .catch((err) => {
        console.log("ERR", err);
      });

  };
  useEffect(()=>{fetchUsers()},[]);

  const pageHandler=(page)=>
  {
    setuserDate(userArray.slice((page*10)-10,10*page))
  }

  const sortfun=()=>
  {
  //  let arr= state.obj.pages.sort((a, b) => {
  //   return b.id - a.id;

  let arr=  state.obj.pages.sort((a, b) => {
      let fa = a.first_name.toLowerCase(),
          fb = b.first_name.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
    console.log(arr);
  }



  // console.log(state.obj.pages);
  return (
    
    <div className="App">
      <h1>User</h1>
      <table>
        <thead>
        <tr>
          <th>First_name&nbsp;<i className="fa fa-sort" aria-hidden="true" onClick={sortfun}></i></th>
          <th>Last_name&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
          <th>Age&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
          <th>Web</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
      {
        state.obj.pages.map((ele)=>{
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
